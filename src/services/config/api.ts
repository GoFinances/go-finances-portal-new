import axios, { AxiosError } from 'axios'
import { parseCookies, setCookie, destroyCookie } from 'nookies'

import { AuthTokenError } from '../../errors/AuthTokenError';

let isRefreshing = false;
let failedRequestKill: any[] = [];

const apiURL = process.env.NEXT_PUBLIC_API_BASE_URL

export function setupApiClient(customURL?: string) {
  const baseURL = customURL || apiURL
  // eslint-disable-next-line react-hooks/rules-of-hooks
  let cookies = parseCookies();

  const api = axios.create({
    baseURL,
    headers: {
      Authorization: `Bearer ${cookies['@GOFINANCE:token']}`
    }
  });


  api.interceptors.response.use(response => response, (error: AxiosError) => {
    if (error.response?.status === 401) {
      if (String(error.response?.data.status).toUpperCase() == "TOKEN_EXPIRED") {
        //Renovar token

        cookies = parseCookies();
        const { "@GOFINANCE:refreshToken": refreshToken } = cookies;
        const originalConfig = error.config;

        console.log("refreshToken",refreshToken)
        if (!isRefreshing) {
          isRefreshing = true;

          api.post("/sessions/refresh-token", { refreshToken })
            .then(response => {
              const { token } = response.data;

              setCookie(null, '@GOFINANCE:token', token, {
                maxAge: 60 * 60 * 24 * 30, // 30dias,
                path: "/"
              });
              setCookie(null, '@GOFINANCE:refreshToken', response.data.refresh_token, {
                maxAge: 60 * 60 * 24 * 30, // 30dias,
                path: "/"
              });

              api.defaults.headers['Authorization'] = `Bearer ${token}`;

              failedRequestKill.forEach(request => request.onSucess(token));
              failedRequestKill = [];
            }).catch(error => {
              failedRequestKill.forEach(request => request.onFailure(error));
              failedRequestKill = [];

              if (process.browser) {
                destroyCookie(undefined, '@GOFINANCE:token');
                destroyCookie(undefined, '@GOFINANCE:user');
              } else {
                return Promise.reject(new AuthTokenError());
              }
            }).finally(() => {
              isRefreshing = false
            })
        }

        return new Promise((resolve, reject) => {
          failedRequestKill.push({
            onSucess: (token: string) => {
              originalConfig.headers["Authorization"] = `Bearer ${token}`;
              resolve(api(originalConfig))
            },
            onFailure: (error: AxiosError) => { reject(error) }
          })
        })

      } else {
        //Deslogar usuário
        if (process.browser) {
          destroyCookie(undefined, '@GOFINANCE:token');
          destroyCookie(undefined, '@GOFINANCE:user');
          window.location.replace('/sign-in')
        }
      }
    }

    return Promise.reject(error);
  })

  return api
}
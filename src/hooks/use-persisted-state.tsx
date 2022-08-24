import { useState, useEffect, Dispatch, SetStateAction } from 'react'
import { parseCookies, setCookie } from 'nookies'

type Response<T> = [
  T,
  Dispatch<SetStateAction<T>>
]

function usePersistedState<T>(key: string, initialState: T): Response<T> {
  const [state, setState] = useState(() => {
    const storageValue = parseCookies()[key];
    if (storageValue) {
      return JSON.parse(storageValue);
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    setCookie(undefined, key, JSON.stringify(state))
  }, [key, state])

  return [state, setState];

}

export default usePersistedState;
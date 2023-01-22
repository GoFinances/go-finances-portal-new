export interface LoginUser {
    username: string
    password: string
}

export interface LoginResponse {
    user:{ 
        id: string
        name: string
        email: string
        avatar_url?: string
    },
    token: string
    refresh_token: string
}
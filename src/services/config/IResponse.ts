export interface IResponse <T>{
    message?: string
    status?: string
    success: boolean
    result: T
}
import { IResponse } from "./IResponse";

export const treatmentRequest = ({ success, message }: IResponse<any>, messageDefault ="Não foi possível executar essa operação") => {
    if(!success)
        throw new Error(message || messageDefault)
}
import { render, screen } from '@testing-library/react'

import { useForm } from 'react-hook-form'

import * as yup from "yup";


import FormInput from '../input'
import { mocked } from 'ts-jest/dist/utils/testing';

jest.mock('react-hook-form')

interface IFormValue {
    user : string
}

const schema = yup.object({
    user: yup.string().required("Nome do usuário é obrigatório.")
}).required();

describe("Ao testar o component input", () => {
    it("deve renderizar corretamente",() => {
        const useFormMocked = mocked(useForm)
        useFormMocked.mockReturnValueOnce({
            register: jest.fn(),
            formState: { errors: {} }
        } as any)
        
        const {
            register,
            formState: { errors },
          } = useFormMocked()

        render(
            <FormInput 
                type="text"
                name="user"
                label={{ text : "usuário" }}
                errors={errors}
                fieldRegister="user"
                register={register}
                size={"md"}
            />
        )

        expect(screen.getByTestId("input-user")).toBeInTheDocument();
    })
})
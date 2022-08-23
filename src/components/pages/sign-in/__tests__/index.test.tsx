import { render, screen } from '@testing-library/react'

import SignIn from '..'

describe("Ao testar a pagina sign-in", () => {
    it("Deve renderizar corretamente", () => {
        render( <SignIn /> )
        expect(screen.getByTestId("sign-in")).toBeInTheDocument();
        expect(screen.getByTestId("formulario-login")).toBeInTheDocument();
        expect(screen.getByText("Usuário")).toBeInTheDocument();
        expect(screen.getByText("Senha")).toBeInTheDocument();
        expect(screen.getByText("Entrar")).toBeInTheDocument();
        expect(screen.getByText("Novo")).toBeInTheDocument();
    })
})
import { screen, render } from '@testing-library/react'
import SignUp from '..'

describe("Ao testar SignUp", () => {
    it("Deve renderizar corretamente",() => {
        render(
            <SignUp />
        )
        expect(screen.getByText("SignUp")).toBeInTheDocument()
    })
})
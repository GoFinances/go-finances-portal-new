import { render, screen } from '@testing-library/react'
import AuthLayout from '..'

describe("Ao testar o template AuthLayout", ()=> {
    it("Deve renderizar corretamente", () => {
        render(
         <AuthLayout>
            <div>Componente renderizado.</div>
         </AuthLayout>
        )

        expect(screen.getByText("Componente renderizado.")).toBeInTheDocument();
    })
})
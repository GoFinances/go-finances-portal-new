import { render, screen } from '@testing-library/react'
import AuthenticatedLayout from '..'

describe("Ao testar o template AuthenticatedLayout", ()=> {
    it("Deve renderizar corretamente", () => {
        render(
         <AuthenticatedLayout>
            <div>Componente renderizado.</div>
         </AuthenticatedLayout>
        )

        expect(screen.getByText("Componente renderizado.")).toBeInTheDocument();
    })
})
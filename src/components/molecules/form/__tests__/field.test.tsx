import { render, screen } from '@testing-library/react'
import { FieldValues } from 'react-hook-form';
import FormField from '../field';


describe("Ao testar o component Field", () => {
    it("deve renderizar o component corretamente", () =>{
        render(
            <FormField 
                name="name"
                label={{ text: "Nome"}}
            >
                <div>Renderizou Children</div>
            </FormField>

        )

        expect(screen.getByText("Renderizou Children")).toBeInTheDocument();
        expect(screen.getByTestId("form-label-text")).toBeInTheDocument();
        expect(screen.getByText("Nome")).toBeInTheDocument();
    })

    it("deve renderizar o componente de erro ", () =>{
        render(
            <FormField 
                name="name"
                label={{ text: "Nome"}}
                error={{ message: "teste" } as FieldValues}
            >
                <div>Renderizou Children</div>
            </FormField>

        )
        expect(screen.getByTestId("form-error-message")).toBeInTheDocument();
    })

    it("deve renderizar o desabilitado ", () =>{
        render(
            <FormField 
                name="name"
                label={{ text: "Nome"}}
                isDisabled={true}
            >
                <div>Renderizou Children</div>
            </FormField>

        )
        expect(screen.getByTestId("form-label-text-disabled")).toBeInTheDocument();
    })

    
})
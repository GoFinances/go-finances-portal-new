import { screen, render } from '@testing-library/react'

jest.mock('next/router', () => ({
    ...jest.requireActual('next/router'),
    default: {
      push: jest.fn(),
    },
  }));

import SignUp from '..'

describe("Ao testar SignUp", () => {
    it("Deve renderizar corretamente",() => {
        jest.spyOn(require('next/router').default, 'push');
        render(
            <SignUp />
        )
        expect(screen.getByTestId("sign-up")).toBeInTheDocument();
    })
})
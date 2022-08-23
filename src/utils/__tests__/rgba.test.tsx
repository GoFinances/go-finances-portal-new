import { rgba } from "../rgba";

describe("Ao passar o valor de uma cor hexadecimal", () => {
    it("deve retornar a mesma cor rgba", () => {
        expect(rgba("#000000")).toEqual("rgb(0, 0, 0)")
    })
})
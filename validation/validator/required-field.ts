import { Validator } from "../contracts/validator";

export class RequiredField implements Validator {
    constructor(private readonly fieldName: string) { }
    validate(data: any): Error {
        if (!data[this.fieldName]) {
            return new Error(`${this.fieldName} é um campo obrigatório`)
        }
    }
}
import { RequiredFieldError } from "../../presentation/errors/required-field-error";
import { Validator } from "../contracts/validator";

export class RequiredFieldValidator implements Validator {
    constructor(private readonly fieldName: string) { }
    validate(data: any): Error {
        if (!data[this.fieldName]) {
            return new RequiredFieldError(this.fieldName)
        }
    }
}
import { InvalidFieldError } from "../../presentation/errors/invalid-field-error";
import { Validator } from "../contracts/validator";
import validator from 'validator'

export class EmailValidator implements Validator {
    constructor (private readonly fieldName: string) { }
    validate(data: any): Error {
        if (!validator.isEmail(data[this.fieldName])) {
            return new InvalidFieldError(this.fieldName)
        }
    }
}
import { Validator } from "../../../validation/contracts/validator";
import { CompositeValidator } from "../../../validation/validator/composite-validator";
import { EmailValidator } from "../../../validation/validator/email-validator";
import { RequiredFieldValidator } from "../../../validation/validator/required-field-validator";

export const createUserValidation = (): Validator => {
    const requiredFields = ['name', 'email', 'password']
    const validators = []
    for (let requiredField of requiredFields) {
        validators.push(new RequiredFieldValidator(requiredField))
    }
    validators.push(new EmailValidator('email'))
    return new CompositeValidator(validators)
}
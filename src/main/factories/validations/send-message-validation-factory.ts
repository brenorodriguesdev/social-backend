import { Validator } from "../../../validation/contracts/validator"
import { CompositeValidator } from "../../../validation/validator/composite-validator"
import { RequiredFieldValidator } from "../../../validation/validator/required-field-validator"


export const makeSendMessageValidation = (): Validator => {
    const requiredFields = ['id', 'idReceiver', 'message']
    const validators = []
    for (let requiredField of requiredFields) {
        validators.push(new RequiredFieldValidator(requiredField))
    }
    return new CompositeValidator(validators)
}
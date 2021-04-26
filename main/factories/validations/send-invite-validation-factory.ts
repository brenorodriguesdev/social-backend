import { Validator } from "../../../validation/contracts/validator"
import { CompositeValidator } from "../../../validation/validator/composite-validator"
import { RequiredFieldValidator } from "../../../validation/validator/required-field-validator"


export const makeSendInviteValidation = (): Validator => {
    const requiredFields = ['id', 'id_guest']
    const validators = []
    for (let requiredField of requiredFields) {
        validators.push(new RequiredFieldValidator(requiredField))
    }
    return new CompositeValidator(validators)
}
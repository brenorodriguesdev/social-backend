export class RequiredFieldError extends Error { 
    constructor(private readonly fieldName: string) {
        super(`${fieldName} é um campo obrigatório`)
    }
}
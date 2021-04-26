export class InvalidFieldError extends Error { 
    constructor(private readonly fieldName: string) {
        super(`${fieldName} é um campo inválido`)
    }
}
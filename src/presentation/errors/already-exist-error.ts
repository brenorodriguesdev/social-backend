export class AlreadyExistError extends Error {
    constructor(description: string) {
        super(description)
    }
}
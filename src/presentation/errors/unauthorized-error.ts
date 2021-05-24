export class UnauthorizedError extends Error {
    constructor(private readonly description: string) {
        super(description)
    }
}
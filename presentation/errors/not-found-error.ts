export class NotFoundError extends Error {
    constructor(private readonly description: string) {
        super(description)
    }
}
export interface AcceptInviteUseCase {
    accept(id: number): Promise<void | Error>
}
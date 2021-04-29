export interface RefuseInviteUseCase {
    refuse(id: number): Promise<void | Error>
}
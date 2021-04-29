export interface GetCountNotificationUseCase {
    get(idUser: number): Promise<void>
}
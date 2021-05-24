export interface GetCountNotificationUseCase {
    get(idUser: number): Promise<number>
}
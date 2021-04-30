export interface ViewNotificationUseCase {
    view(idUser: number): Promise<void>
}
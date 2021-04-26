export interface AuthenticationUseCase {
    auth(accessToken: string): Promise<any>
}
import { UserModel } from "../models/user";

export interface SearchUserUseCase {
    search(id: number, user: string) : Promise<UserModel[] | Error>
}
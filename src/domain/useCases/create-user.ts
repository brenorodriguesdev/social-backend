import { CreateUserModel } from "../models/create-user";

export interface CreateUserUseCase {
    create(user: CreateUserModel): Promise<void | Error>
}
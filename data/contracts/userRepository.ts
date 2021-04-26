import { User } from "../models/user";

export interface UserRepository {
    findByEmail(email: string): Promise<User>
    create(user: User): Promise<void>
}
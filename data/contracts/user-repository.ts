import { User } from "../models/user";

export interface UserRepository {
    findByEmail(email: string): Promise<User>
    findById(id: number): Promise<User>
    create(user: User): Promise<void>
}
import { User } from "../models/user";

export interface UserRepository {
    filter(user: string): Promise<User[]>
    findByEmail(email: string): Promise<User>
    findById(id: number): Promise<User>
    create(user: User): Promise<void>
}
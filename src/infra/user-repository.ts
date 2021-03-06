import { database } from "../main/config/database";
import { UserRepository } from "../data/contracts/user-repository";
import { User } from "../data/models/user";

export class UserRepositoryPostgres implements UserRepository {
    async filter(id: number, user: string): Promise<User[]> {
        const users = await database.manyOrNone('select id, name from user_account where lower(name) like lower($1) and id <> $2', [`%${user}%`, id]);
        return users
    }

    async findByEmail(email: string): Promise<User> {
        return await database.oneOrNone('select * from user_account where lower(email) = lower($1)', [email]);
    }

    async findById(id: number): Promise<User> {
        return await database.oneOrNone('select * from user_account where id = $1', [id]);
    }

    async create(user: User): Promise<void> {
        await database.none('insert into user_account (name, email, password) values ($1, $2, $3)', [user.name, user.email, user.password]);
    }
}
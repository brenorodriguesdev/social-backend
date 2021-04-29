import { InviteRepository } from "../data/contracts";
import { Invite } from "../data/models/invite";
import { database } from "../main/config/database";

export class InviteRepositoryPostgres implements InviteRepository {
    async create(invite: Invite): Promise<void> {
        await database.none('insert into user_invite (id_user, id_guest, view) values ($1, $2, $3)', [invite.id_user, invite.id_guest, invite.view]);
    }

    async findById(id: number): Promise<Invite> {
        return await database.oneOrNone('select * from user_invite where id = $1', [id]);
    }

    async deleteById(id: number): Promise<void> {
        await database.none('delete from user_invite where id = $1', [id]);
    }

    async findByUsers(idUser: number, idGuest: number): Promise<Invite> {
        return await database.oneOrNone('select * from user_invite where id_user = $1 and id_guest = $1', [idUser, idGuest]);
    }

    async findByGuest(idGuest: number): Promise<Invite[]> {
        return await database.manyOrNone('select i.id, u.name from user_invite i, user_account u where i.id_guest = $1 and i.id_guest = u.id', [idGuest]);
    }

}
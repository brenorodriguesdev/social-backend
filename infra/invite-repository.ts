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

    async findByGuest(idGuest: number): Promise<Invite> {
        return await database.oneOrNone('select * from user_invite where id_guest = $1', [idGuest]);
    }

}
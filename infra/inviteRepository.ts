import { InviteRepository } from "../data/contracts";
import { Invite } from "../data/models/invite";
import { database } from "../main/config/database";

export class InviteRepositoryPostgres implements InviteRepository {
    async create(invite: Invite): Promise<void> {
        database.none('insert into user_invite (id_user, id_guest, view) values ($1, $2, $3)', [invite.id_user, invite.id_guest, invite.view]);
    }
}
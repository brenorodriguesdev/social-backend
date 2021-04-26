import { Invite } from "../models/invite";

export interface InviteRepository {
    create(invite: Invite): Promise<void>
}
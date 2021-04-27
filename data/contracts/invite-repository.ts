import { Invite } from "../models/invite";

export interface InviteRepository {
    create(invite: Invite): Promise<void>
    findById(id: number): Promise<Invite>
    findByGuest(idGuest: number): Promise<Invite>
}
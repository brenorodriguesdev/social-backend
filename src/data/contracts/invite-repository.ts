import { Invite } from "../models/invite";

export interface InviteRepository {
    create(invite: Invite): Promise<void>
    findById(id: number): Promise<Invite>
    deleteById(id: number): Promise<void>
    findByUsers(idUser: number, idGuest: number): Promise<Invite>
    findByGuest(idUser: number): Promise<Invite[]>
    count(idUser: number): Promise<number>
    setViewByGuest(idUser: number): Promise<void>
}
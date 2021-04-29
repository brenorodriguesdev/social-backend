import { InviteModel } from "../models/invite";

export interface GetInviteList {
    get(idUser: number): Promise<InviteModel>
}
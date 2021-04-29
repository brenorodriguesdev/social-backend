import { InviteModel } from "../models/invite";

export interface GetInviteListUseCase {
    get(idUser: number): Promise<InviteModel[]>
}
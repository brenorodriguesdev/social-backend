import { SendInviteModel } from "../models/send-invite";

export interface SendInviteUseCase {
    send(invite: SendInviteModel): Promise<void | Error>
}
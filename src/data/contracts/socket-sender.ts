export interface SocketSend {
    send(idUser: number, packet: string, data: any): Promise<void>
}
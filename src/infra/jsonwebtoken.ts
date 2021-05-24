import { Crypter, Encrypter } from "../data/contracts";
import * as jwt from 'jsonwebtoken'

export class JsonWebToken implements Crypter, Encrypter {
    constructor(private readonly secretKey: string) { }
    async crypt(data: any): Promise<string> {
        return await jwt.sign(data, this.secretKey, {
            expiresIn: '1h'
        })
    }
    async encrypt(value: string): Promise<any> {
        try { return await jwt.verify(value, this.secretKey) } catch { return undefined; }
    }
}
import { Hasher } from "../data/contracts/hasher";
import bcrypt from 'bcrypt'

export class Bcrypt implements Hasher {
    constructor(private readonly salt: number) { }
    async hash(value: string): Promise<string> {
        return await bcrypt.hash(value, this.salt)
    }
    async compare(value: string, hash: string): Promise<boolean> {
        return await bcrypt.compare(value, hash)
    }
}
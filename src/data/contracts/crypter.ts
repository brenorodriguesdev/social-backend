export interface Crypter {
    crypt(data: any): Promise<string>
}
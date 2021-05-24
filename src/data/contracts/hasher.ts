export interface Hasher {
    compare(value: string, hash: string): Promise<boolean>
    hash(value: string): Promise<string>
}
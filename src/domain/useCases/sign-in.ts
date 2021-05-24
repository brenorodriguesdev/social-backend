import { SignInModel } from "../models/sign-in";

export interface SignInUseCase {
    sign(signInModel: SignInModel): Promise<string | Error>
}
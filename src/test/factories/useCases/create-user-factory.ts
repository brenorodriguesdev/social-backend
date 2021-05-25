import { CreateUserModel } from "../../../domain/models/create-user";
import { CreateUserUseCase } from "../../../domain/useCases/create-user";

export const makeCreateUserUseCaseFactory = (): CreateUserUseCase => {
    class CreateUserUseCaseStub implements CreateUserUseCase {
        async create(user: CreateUserModel): Promise<void | Error> {
            
        }
    }
    return new CreateUserUseCaseStub()
}
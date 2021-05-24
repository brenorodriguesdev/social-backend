import { CreateUserModel } from "../../../src/domain/models/create-user";
import { CreateUserUseCase } from "../../../src/domain/useCases/create-user";

const makeCreateUserUseCaseFactory = (): CreateUserUseCase => {
    class CreateUserUseCaseStub implements CreateUserUseCase {
        async create(user: CreateUserModel): Promise<void | Error> {
            
        }
    }
    return new CreateUserUseCaseStub()
}
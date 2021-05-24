import { AcceptInviteUseCase } from "../../../src/domain/useCases/accept-invite";

const makeAcceptInviteUseCaseTest = (): AcceptInviteUseCase => {
    class AcceptInviteUseCaseStub implements AcceptInviteUseCase {
        async accept(id: number): Promise<void | Error> {

        }
    }
    return new AcceptInviteUseCaseStub()
}
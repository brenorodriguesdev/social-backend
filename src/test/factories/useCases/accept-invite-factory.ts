import { AcceptInviteUseCase } from "../../../domain/useCases/accept-invite";

export const makeAcceptInviteUseCaseTest = (): AcceptInviteUseCase => {
    class AcceptInviteUseCaseStub implements AcceptInviteUseCase {
        async accept(id: number): Promise<void | Error> {

        }
    }
    return new AcceptInviteUseCaseStub()
}
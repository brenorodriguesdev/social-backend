import { JsonWebToken } from "../../../infra/jsonwebtoken"
import { AuthenticationService } from "../../../data/services/authentication"
import { AuthMiddleware } from "../../../presentation/middlewares/auth"


export const makeAuthMiddleware = (): AuthMiddleware => {
    const jsonWebTokenProvider = new JsonWebToken('secret_key')
    const authenticationService = new AuthenticationService(jsonWebTokenProvider)
    return new AuthMiddleware(authenticationService)
}
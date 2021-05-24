import { Request, Response, NextFunction } from 'express'
import { Controller } from '../../presentation/contracts/controller'
import { HttpRequest } from '../../presentation/contracts/http'

export const adaptMiddleware = (middleware: Controller) => {
    return async (req: Request, res: Response, next: NextFunction) => {

        const authHeader = req.headers.authorization
        const [, accessToken] = authHeader ? authHeader.split('Bearer ') : ""

        const httpRequest : HttpRequest = {
            body: {
                accessToken
            },
        }

        const httpResponse = await middleware.handle(httpRequest)
        if (httpResponse.statusCode === 200) {
            Object.assign(req.body, httpResponse.data)
            next()
        } else {
            res.status(httpResponse.statusCode).json({
                error: httpResponse.data.message
            })
        }
    }
}
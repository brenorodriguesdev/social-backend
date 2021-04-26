import { Controller } from "../../presentation/contracts/controller"
import { HttpRequest } from "../../presentation/contracts/http"
import { Request, Response } from 'express'

export const adaptRouter = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body,
    }
    const httpResponse = await controller.handle(httpRequest)
    if (httpResponse.statusCode !== 200 && httpResponse.statusCode !== 201) {
      res.status(httpResponse.statusCode).json({ message: httpResponse.data.message })
    } else {
      res.status(httpResponse.statusCode).json(httpResponse.data)
    }
  }
}
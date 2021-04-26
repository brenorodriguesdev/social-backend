import { HttpRequest, HttpResponse } from "./http";

export const serverError = (): HttpResponse => ({
    data: new Error('Erro Interno no Servidor'),
    statusCode: 500
})

export const badRequest = (error: Error): HttpResponse => ({
    data: error,
    statusCode: 400
})

export const created = (): HttpResponse => ({
    statusCode: 201
})

export const ok = (data: any): HttpResponse => ({
    data,
    statusCode: 200
})
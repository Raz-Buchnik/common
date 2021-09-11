import { CustomError } from './CustomError'
import { ErrorParams } from '../interfaces'
import { ResponseCodes } from '../enums'

export class BadRequestError extends CustomError {
  code = ResponseCodes.BadRequest
  is_operational = true

  constructor(params?: ErrorParams) {
    super(params)
    this.name = params?.name || 'Bad Request'
    this.message = params?.message || 'Something went wrong'
  }
}

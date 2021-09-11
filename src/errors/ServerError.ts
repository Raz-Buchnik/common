import { CustomError } from './index'
import { ErrorParams } from '../interfaces'
import { ResponseCodes } from '../enums'

export class ServerError extends CustomError {
  code = ResponseCodes.Internal
  is_operational = false

  constructor(params?: ErrorParams) {
    super(params)
    this.name = params?.name || 'Internal Server Error'
    this.message = params?.message || 'Try again later'
  }
}

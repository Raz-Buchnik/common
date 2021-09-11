import { CustomError } from './CustomError'
import { ErrorParams } from '../interfaces'
import { ResponseCodes } from '../enums'

export class UnAuthorizedError extends CustomError {
  code = ResponseCodes.UnAuthorized
  is_operational = true

  constructor(params?: ErrorParams) {
    super(params)
    this.name = params?.name || 'Un Authorized'
    this.message =
      params?.message ||
      'You must have the right permission to access this resource'
  }
}

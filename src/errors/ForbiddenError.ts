import { CustomError } from './CustomError'
import { ErrorParams } from '../interfaces'
import { ResponseCodes } from '../enums'

export class ForbiddenError extends CustomError {
  code = ResponseCodes.Forbidden
  is_operational = true

  constructor(params?: ErrorParams) {
    super(params)
    this.name = params?.name || 'Forbidden'
    this.message =
      params?.message || "You don't have the right access to this resource"
  }
}

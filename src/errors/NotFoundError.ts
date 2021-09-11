import { CustomError } from './CustomError'
import { ErrorParams } from '../interfaces'
import { ResponseCodes } from '../enums'

export class NotFoundError extends CustomError {
  code = ResponseCodes.NotFound
  is_operational = true

  constructor(params?: ErrorParams) {
    super(params)
    this.name = params?.name || 'Not Found'
    this.message = params?.message || "The resource doesn't exist"
  }
}

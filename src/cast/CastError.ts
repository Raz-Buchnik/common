import { CustomError } from '../errors'

export class CastError {
  OK = false
  error: CustomError

  constructor(error: CustomError) {
    this.error = error
  }
}

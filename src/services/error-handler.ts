import { CastError } from '../cast'
import { CustomError, ServerError } from '../errors'

export interface ErrorHandlerParams {
  err: any | CustomError
}

export interface ErrorHandlerResult {
  castError?: CastError
}

export const errorHandler = ({
  err,
}: ErrorHandlerParams): ErrorHandlerResult => {
  // if no error
  if (!err) return {}

  // if programmer error
  if (!err?.is_operational) {
    if (err?.stack) {
      console.error(err.stack)
    }
    err = new ServerError()
  }

  // cast the error
  const castError = new CastError(err)

  // escape the is_operational error from the client
  delete castError.error.is_operational

  // send it back
  return { castError }
}

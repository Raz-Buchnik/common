import { Request, Response, NextFunction } from 'express'
import { NotFoundError } from '../errors'
import { CastError } from '../cast'

export const notFoundRouter = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  // create a new NotFound error
  const notFoundError = new NotFoundError()

  // create a new error resposne
  const castError = new CastError(notFoundError)

  // send the error
  res.status(castError.error.code).json(castError)
}

import { Request, Response, NextFunction } from 'express'
import { NotFoundError } from '../errors'
import { CastError } from '../cast'
import { errorHandler } from '../services'

export const notFoundRouter = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  // create a new NotFound error
  const notFoundError = new NotFoundError()

  // handle error
  const { castError } = errorHandler({ err: notFoundError })

  // send the error
  res.status(castError.error.code).json(castError)
}

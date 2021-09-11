import { Request, Response, NextFunction } from 'express'
import { errorHandler } from '../services'

export const errorsRouter = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // if no err, next
  if (!err) {
    return next()
  }

  // handle error
  const { castError } = errorHandler({ err })

  // send the error
  res.status(castError.error.code).json(castError)
}

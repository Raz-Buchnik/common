import { Request, Response, NextFunction } from 'express'
import { Logger } from 'winston'
import { errorHandler } from '../services'

export const errorsRouter = (
  logger: Logger
) => {
  return (
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
    const { castError } = errorHandler({ err, logger })

    // // send the error
    res.status(castError.error.code).json(castError)
    
  }
}
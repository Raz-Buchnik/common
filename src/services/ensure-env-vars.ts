import { ServerError } from '../errors'

export const ensureEnvVars = (list: string[]): void => {
  list.map((item) => {
    if (!process.env[item]) {
      throw new ServerError({ message: `Missing ${item} env variable` })
    }
  })
}

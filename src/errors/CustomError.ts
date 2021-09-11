import { ErrorParams } from '../interfaces'

export class CustomError extends Error {
  code: number
  flags?: {}
  trace_id?: string
  is_operational: boolean

  constructor(params?: ErrorParams) {
    super()
    if (params?.flags) {
      this.flags = params.flags
    }
    if (params?.trace_id) {
      this.trace_id = params.trace_id
    }
  }
}

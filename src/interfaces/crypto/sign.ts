export interface SignParams {
  data: any
  privateKey: string
}

export interface SignResult {
  signBuffer: Buffer
  signStr: string
}
export interface SignParams {
  data: string
  privateKey: string
}

export interface SignResult {
  signBuffer: Buffer
  signStr: string
}
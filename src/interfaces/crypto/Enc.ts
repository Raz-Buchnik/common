export interface EncParams {
  key: {
    publicKey?: string
    privateKey?: string
  }
  data: string
}

export interface EncResult {
  encBuffer: Buffer
  encStr: string
}

export interface DecParams {
  privateKey: string,
  encBuffer: Buffer
}

export interface DecResult {
  decBuffer: Buffer,
  decStr: string
}
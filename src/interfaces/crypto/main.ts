import { SignParams, SignResult } from './Sign'
import { GenPairParams, KeysPair } from './GenPair'
import { EncParams, EncResult } from './Enc'
import { DecParams, DecResult } from './Dec'
import { VerifyParams } from './Verify'

export interface CryptoHandler {
  sign(params: SignParams): SignResult
  genPair(params?: GenPairParams): KeysPair,
  enc(params: EncParams): EncResult,
  dec(params: DecParams): DecResult,
  verify(params: VerifyParams): boolean
}

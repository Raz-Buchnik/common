import { SignParams, SignResult } from './Sign';
import { GenPairParams, KeysPair } from './GenPair';

export interface CryptoHandler {
  sign(params: SignParams): SignResult
  genPair(params?: GenPairParams): KeysPair
}
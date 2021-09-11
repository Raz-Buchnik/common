import { SignParams, SignResult } from './sign';

export interface CryptoHandler {
  sign(params: SignParams): SignResult
}
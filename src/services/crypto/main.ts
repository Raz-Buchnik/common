import { CryptoHandler } from '../../interfaces'
import { sign } from './sign'
import { genPair } from './gen-pair'

export const cryptoHandler: CryptoHandler = {
  sign,
  genPair
}
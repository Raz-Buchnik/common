import { CryptoHandler } from '../../interfaces'
import { sign } from './sign'
import { genPair } from './gen-pair'
import { enc } from './enc'
import { dec } from './dec'
import { verify } from './verify'

export const cryptoHandler: CryptoHandler = {
  sign,
  genPair,
  enc,
  dec,
  verify
}
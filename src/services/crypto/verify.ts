import { verify as CryptoVerify } from 'crypto'
import { VerifyParams } from '../../interfaces'

export const verify = ({
  data,
  publicKey,
  signature
}: VerifyParams): boolean => CryptoVerify('sha256', Buffer.from(data), publicKey, Buffer.from(signature, 'base64'))
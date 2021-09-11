import { publicEncrypt } from 'crypto'
import { EncParams, EncResult } from '../../interfaces'

export const enc = ({
  key,
  data
}: EncParams): EncResult => {
  
  const actualKey = key.privateKey || key.publicKey

  const enc_buffer = publicEncrypt(actualKey, Buffer.from(data))
  const enc_str = enc_buffer.toString('base64')

  return {
    encBuffer: enc_buffer,
    encStr: enc_str
  }

}
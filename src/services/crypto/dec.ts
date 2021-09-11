import { privateDecrypt } from 'crypto'
import { DecParams, DecResult } from '../../interfaces'

export const dec = ({
  privateKey,
  encBuffer
}: DecParams): DecResult => {
  
  const dec_buffer = privateDecrypt(privateKey, encBuffer)
  const dec_str = dec_buffer.toString()

  return {
    decBuffer: dec_buffer,
    decStr: dec_str
  }

}
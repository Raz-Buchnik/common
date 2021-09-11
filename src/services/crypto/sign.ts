import { sign as Sign } from 'crypto'
import { SignParams, SignResult } from '../../interfaces'

export const sign = ({
  data,
  privateKey 
}: SignParams): SignResult => {
  const sign_buffer = Sign('sha256', Buffer.from(data), privateKey)
  const sign_str = sign_buffer.toString('base64')

  return {
    signBuffer: sign_buffer,
    signStr: sign_str,
  }
}

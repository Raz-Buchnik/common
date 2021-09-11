
import { generateKeyPairSync } from 'crypto'
import { GenPairParams, KeysPair } from '../../interfaces'

export const genPair = ({
  modulusLength = 2048
}: GenPairParams = {}): KeysPair => {
  
  const {
    privateKey,
    publicKey
  } = generateKeyPairSync('rsa', {
    modulusLength,
    publicKeyEncoding: {
      type: 'spki',
      format: 'pem'
    },
    privateKeyEncoding: {
      type: 'pkcs8',
      format: 'pem'
    }
  })

  return {
    privateKey,
    publicKey
  }

}

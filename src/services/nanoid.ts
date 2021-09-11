import { nanoid } from 'nanoid'

export const nanoId = (size?: number): string => nanoid(size)

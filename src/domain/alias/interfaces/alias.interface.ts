import { ID } from '@shared/domain/value-object/id.value-object'

interface IAlias {
  userId: ID
  aliasId: string
  extraInfo?: string
  description: string
  isRestricted: boolean
}

export { IAlias }

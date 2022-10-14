import { ID } from '@shared/domain/value-object/id.value-object'

interface IMapping {
  userId: ID
  key: string
  scriptName: string
}

export { IMapping }

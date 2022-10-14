import { ID } from '@shared/domain/value-object/id.value-object'

interface ILocale {
  userId: ID
  localeId: string
  extraInfo?: string
  displayName: string
  languageCode: string
  nativeLanguageDescription: string
}

export { ILocale }

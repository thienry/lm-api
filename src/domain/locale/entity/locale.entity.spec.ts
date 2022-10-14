import { Locale } from './locale.entity'
import { ID } from '@shared/domain/value-object/id.value-object'

let locale: Locale

describe('Locale entity unit tests', () => {
  beforeEach(() => {
    locale = new Locale({
      id: new ID(),
      userId: new ID(),
      localeId: 'localeId',
      displayName: 'displayName',
      languageCode: 'languageCode',
      nativeLanguageDescription: 'nativeLanguageDescription',
    })
  })

  it('should throws when localeID is empty', () => {
    const localeWithouLocaleID = {
      id: new ID(),
      userId: new ID(),
      localeId: '',
      displayName: 'displayName',
      languageCode: 'languageCode',
      nativeLanguageDescription: 'nativeLanguageDescription',
    }

    expect(() => new Locale(localeWithouLocaleID)).toThrowError('Locale ID is required!')
  })

  it('should throws when display name is empty', () => {
    const localeWithoutDisplayName = {
      id: new ID(),
      userId: new ID(),
      displayName: '',
      localeId: 'localeId',
      languageCode: 'languageCode',
      nativeLanguageDescription: 'nativeLanguageDescription',
    }

    expect(() => new Locale(localeWithoutDisplayName)).toThrowError('Display name is required!')
  })

  it('should throws when language code is empty', () => {
    const localeWithoutLanguageCode = {
      id: new ID(),
      userId: new ID(),
      languageCode: '',
      localeId: 'localeId',
      displayName: 'displayName',
      nativeLanguageDescription: 'nativeLanguageDescription',
    }

    expect(() => new Locale(localeWithoutLanguageCode)).toThrowError('Language code is required!')
  })

  it('should throws when native language description is empty', () => {
    const localeWithoutNativeDescription = {
      id: new ID(),
      userId: new ID(),
      localeId: 'localeId',
      displayName: 'displayName',
      languageCode: 'languageCode',
      nativeLanguageDescription: '',
    }

    expect(() => new Locale(localeWithoutNativeDescription)).toThrowError(
      'Native language description is required!'
    )
  })

  it('should not throws when all properties are valid', () => {
    expect(() => new Locale(locale)).not.toThrowError()
  })

  it('should change display name', () => {
    const displayNameChanged = 'Display name changed'
    locale.changeDisplayName(displayNameChanged)
    expect(locale.displayName).toBe(displayNameChanged)
  })

  it('should change language code', () => {
    const languageCodeChanged = 'language code changed'
    locale.changeLanguageCode(languageCodeChanged)
    expect(locale.languageCode).toBe(languageCodeChanged)
  })

  it('should change extra info', () => {
    const extraInfoChanged = 'extra info changed'
    locale.changeExtraInfo(extraInfoChanged)
    expect(locale.extraInfo).toBe(extraInfoChanged)
  })

  it('should change native language description', () => {
    const nativeLanguageDescriptionChanged = 'native language description changed'
    locale.changeNativeLanguageDescription(nativeLanguageDescriptionChanged)
    expect(locale.nativeLanguageDescription).toBe(nativeLanguageDescriptionChanged)
  })

  it('should change userId', () => {
    const userId = new ID()
    locale.changeUserId(userId)
    expect(locale.userId).toBe(userId)
  })
})

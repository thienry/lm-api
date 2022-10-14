import { LocaleFactory } from './locale.factory'
import { ID } from '@shared/domain/value-object/id.value-object'

describe('Locale factory unit tests', () => {
  it('should create a locale', () => {
    const locale = LocaleFactory.create({
      userId: new ID(),
      localeId: 'pt-br',
      languageCode: 'pt',
      displayName: 'Portuguese (Brazil)',
      extraInfo: 'Extra info about this language',
      nativeLanguageDescription: 'Português (Brasil)',
    })

    expect(locale.id).toBeDefined()
    expect(locale.localeId).toBe('pt-br')
    expect(locale.languageCode).toBe('pt')
    expect(locale.displayName).toBe('Portuguese (Brazil)')
    expect(locale.extraInfo).toBe('Extra info about this language')
    expect(locale.nativeLanguageDescription).toBe('Português (Brasil)')
  })
})

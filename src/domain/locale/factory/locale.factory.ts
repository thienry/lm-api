import { Locale } from '@domain/locale/entity/locale.entity'
import { ILocale } from '@domain/locale/interfaces/locale.interface'

class LocaleFactory {
  static create(props: ILocale): Locale {
    return new Locale({
      userId: props.userId,
      localeId: props.localeId,
      extraInfo: props.extraInfo,
      displayName: props.displayName,
      languageCode: props.languageCode,
      nativeLanguageDescription: props.nativeLanguageDescription,
    })
  }
}

export { LocaleFactory }

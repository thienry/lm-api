import { BaseEntity } from '@shared/domain/entity/base.entity'
import { ID } from '@shared/domain/value-object/id.value-object'
import { AggregateRoot } from '@shared/domain/entity/aggregate-root.interface'

type LocaleProps = {
  id?: ID
  // userId: ID
  localeId: string
  extraInfo?: string
  displayName: string
  languageCode: string
  nativeLanguageDescription: string
  createdAt?: Date
  updatedAt?: Date
}

class Locale extends BaseEntity implements AggregateRoot {
  private _localeId: string
  private _extraInfo?: string
  private _displayName: string
  private _languageCode: string
  private _nativeLanguageDescription: string

  constructor(props: LocaleProps) {
    super(props.id, props.createdAt, props.updatedAt)
    this.initProps(props)
    this.validate()
  }

  initProps(props: LocaleProps) {
    this._localeId = props.localeId
    this._extraInfo = props.extraInfo
    this._displayName = props.displayName
    this._languageCode = props.languageCode
    this._nativeLanguageDescription = props.nativeLanguageDescription
  }

  get localeId(): string {
    return this._localeId
  }

  get displayName(): string {
    return this._displayName
  }

  get extraInfo(): string {
    return this._extraInfo
  }

  get languageCode(): string {
    return this._languageCode
  }

  get nativeLanguageDescription(): string {
    return this._nativeLanguageDescription
  }

  changeDisplayName(displayName: string): void {
    this._displayName = displayName
  }

  changeExtraInfo(extraInfo: string): void {
    this._extraInfo = extraInfo
  }

  changeLanguageCode(languageCode: string): void {
    this._languageCode = languageCode
  }

  changeNativeLanguageDescription(nativeLanguageDescription: string): void {
    this._nativeLanguageDescription = nativeLanguageDescription
  }

  validate() {
    if (!this._localeId) throw new Error('Locale ID is required!')
    if (!this._displayName) throw new Error('Display name is required!')
    if (!this._languageCode) throw new Error('Language code is required!')
    if (!this._nativeLanguageDescription)
      throw new Error('Native language description is required!')
  }
}

export { Locale }

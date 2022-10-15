import { LocaleModel } from './locale.model'
import { Locale } from '@domain/locale/entity/locale.entity'
import { ILocaleRepository } from '@domain/locale/interfaces/locale.repository.interface'

class LocaleRepository implements ILocaleRepository {
  async create(locale: LocaleModel): Promise<Locale> {
    throw new Error('Method not implemented!')
  }

  async update(locale: LocaleModel): Promise<Locale> {
    throw new Error('Method not implemented!')
  }

  async find(localeId: string): Promise<Locale> {
    throw new Error('Method not implemented!')
  }

  async list(): Promise<Locale[]> {
    throw new Error('Method not implemented!')
  }

  async delete(localeId: string): Promise<Locale> {
    throw new Error('Method not implemented!')
  }
}

export { LocaleRepository }

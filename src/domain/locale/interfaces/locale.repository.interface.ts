import { Locale } from '../entity/locale.entity'
import { IRepository } from '@shared/domain/repository/repository.interface'
import { LocaleModel } from '@infra/database/typeorm/repository/locale/locale.model'

interface ILocaleRepository extends IRepository<LocaleModel, Locale> {}

export { ILocaleRepository }

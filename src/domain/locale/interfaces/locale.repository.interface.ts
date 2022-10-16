import { Locale } from '../entity/locale.entity'
import { IRepository } from '@shared/domain/repository/repository.interface'

interface ILocaleRepository extends IRepository<Locale> {}

export { ILocaleRepository }

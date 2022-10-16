import { Alias } from '../entity/alias.entity'
import { IRepository } from '@shared/domain/repository/repository.interface'

type IAliasRepository = IRepository<Alias>

export { IAliasRepository }

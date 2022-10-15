import { Alias } from '../entity/alias.entity'
import { IRepository } from '@shared/domain/repository/repository.interface'
import { AliasModel } from '@infra/database/typeorm/repository/alias/alias.model'

type IAliasRepository = IRepository<AliasModel, Alias>

export { IAliasRepository }

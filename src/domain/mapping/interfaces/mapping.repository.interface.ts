import { Mapping } from '../entity/mapping.entity'
import { IRepository } from '@shared/domain/repository/repository.interface'
import { MappingModel } from '@infra/database/typeorm/repository/mapping/mapping.model'

interface IMappingRepository extends IRepository<MappingModel, Mapping> {}

export { IMappingRepository }

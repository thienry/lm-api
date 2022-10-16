import { Mapping } from '../entity/mapping.entity'
import { IRepository } from '@shared/domain/repository/repository.interface'

interface IMappingRepository extends IRepository<Mapping> {}

export { IMappingRepository }

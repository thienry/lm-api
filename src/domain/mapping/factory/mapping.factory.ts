import { Mapping } from '@domain/mapping/entity/mapping.entity'
import { IMapping } from '@domain/mapping/interfaces/mapping.interface'

class MappingFactory {
  static create(props: IMapping): Mapping {
    return new Mapping({
      key: props.key,
      userId: props.userId,
      scriptName: props.scriptName,
    })
  }
}

export { MappingFactory }

import { Alias } from '@domain/alias/entity/alias.entity'
import { IAlias } from '@domain/alias/interfaces/alias.interface'

class AliasFactory {
  static create(props: IAlias): Alias {
    return new Alias({
      userId: props.userId,
      aliasId: props.aliasId,
      extraInfo: props.extraInfo,
      description: props.description,
      isRestricted: props.isRestricted,
    })
  }
}

export { AliasFactory }

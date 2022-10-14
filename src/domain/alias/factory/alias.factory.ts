import { Alias } from '@domain/alias/entity/alias.entity'
import { IAlias } from '@domain/alias/interfaces/alias.interface'

class AliasFactory {
  static create(props: IAlias): Alias {
    return new Alias({
      aliasId: props.aliasId,
      description: props.description,
      extraInfo: props.extraInfo,
      isRestricted: props.isRestricted,
      userId: props.userId,
    })
  }
}

export { AliasFactory }

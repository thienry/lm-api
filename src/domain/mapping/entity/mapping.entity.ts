import { BaseEntity } from '@shared/domain/entity/base.entity'
import { ID } from '@shared/domain/value-object/id.value-object'
import { AggregateRoot } from '@shared/domain/entity/aggregate-root.interface'

type MappingProps = {
  id?: ID
  key: string
  // roleId: string
  // userId: string
  scriptName: string
  createdAt?: Date
  updatedAt?: Date
}

class Mapping extends BaseEntity implements AggregateRoot {
  private _key: string
  private _scriptName: string

  constructor(props: MappingProps) {
    super(props.id, props.createdAt, props.updatedAt)
    this.initProps(props)
    this.validate()
  }

  initProps(props: MappingProps): void {
    this._key = props.key
    this._scriptName = props.scriptName
  }

  get key(): string {
    return this._key
  }

  get scriptName(): string {
    return this._scriptName
  }

  changeKey(key: string): void {
    this._key = key
  }

  changeScriptName(scriptName: string): void {
    this._scriptName = scriptName
  }

  validate(): void {
    if (!this._key) throw new Error('Key is required!')
    if (!this._scriptName) throw new Error('Script Name is required!')
  }
}

export { Mapping }

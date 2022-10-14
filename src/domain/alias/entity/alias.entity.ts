import { BaseEntity } from '@shared/domain/entity/base.entity'
import { ID } from '@shared/domain/value-object/id.value-object'
import { AggregateRoot } from '@shared/domain/entity/aggregate-root.interface'

type AliasProps = {
  id?: ID
  userId: ID
  aliasId: string
  description: string
  extraInfo?: string
  isRestricted?: boolean
  createdAt?: Date
  updatedAt?: Date
}

class Alias extends BaseEntity implements AggregateRoot {
  private _aliasId: string
  private _description: string
  private _extraInfo?: string
  private _isRestricted: boolean
  private _userId: ID

  constructor(props: AliasProps) {
    super(props.id, props.createdAt, props.updatedAt)
    this.initProps(props)
    this.validate()
  }

  initProps(props: AliasProps): void {
    this._aliasId = props.aliasId
    this._description = props.description
    this._extraInfo = props.extraInfo
    this._userId = props.userId
    this._isRestricted = props.isRestricted ?? false
  }

  get aliasId(): string {
    return this._aliasId
  }

  get description(): string {
    return this._description
  }

  get extraInfo(): string {
    return this._extraInfo
  }

  get isRestricted(): boolean {
    return this._isRestricted
  }

  get userId(): ID {
    return this._userId
  }

  changeDescription(description: string): void {
    this._description = description
  }

  changeExtraInfo(extraInfo: string): void {
    this._extraInfo = extraInfo
  }

  changeIsRestricted(isRestricted: boolean): void {
    this._isRestricted = isRestricted
  }

  changeUserId(userId: ID): void {
    this._userId = userId
  }

  validate(): void {
    if (!this._aliasId) throw new Error('Alias ID is required!')
    if (!this._description) throw new Error('Description is required!')
    if (!this._userId) throw new Error('User ID is required!')
  }
}

export { Alias }

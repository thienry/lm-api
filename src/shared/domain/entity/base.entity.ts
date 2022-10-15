import { ID } from '@shared/domain/value-object/id.value-object'

class BaseEntity {
  private _id: string
  private _createdAt: Date
  private _updatedAt: Date

  constructor(id?: string, createdAt?: Date, updatedAt?: Date) {
    this._id = id ?? new ID().id
    this._createdAt = createdAt ?? new Date()
    this._updatedAt = updatedAt ?? new Date()
  }

  get id(): string {
    return this._id
  }

  get createdAt(): Date {
    return this._createdAt
  }

  get updatedAt(): Date {
    return this._updatedAt
  }

  set updatedAt(updatedAt: Date) {
    this._updatedAt = updatedAt
  }
}

export { BaseEntity }

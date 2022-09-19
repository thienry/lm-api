import { v4 as uuidV4 } from 'uuid'

import { ValueObject } from './value-object.interface'

class Id implements ValueObject {
  private _id: string

  constructor(id?: string) {
    this._id = id ?? uuidV4()
  }

  get id(): string {
    return this._id
  }
}

export { Id }

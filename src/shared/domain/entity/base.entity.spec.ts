// import { Id } from './id.value-object'
import { BaseEntity } from './base.entity'
import { Id } from '../value-object/id.value-object'

describe('ID value object unit tests', () => {
  it('should create the base entity object if no param is passed', () =>
    expect(new BaseEntity()).toBeTruthy())

  it('should create the base entity object if params are passed', () => {
    const createdId = new Id()
    const createdAt = new Date()
    const updatedAt = new Date()

    const baseEntity = new BaseEntity(createdId, createdAt, updatedAt)

    expect(baseEntity.id).toBe(createdId)
    expect(baseEntity.createdAt).toBe(createdAt)
    expect(baseEntity.updatedAt).toBe(updatedAt)
  })
})
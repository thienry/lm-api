import { ID } from '@shared/domain/value-object/id.value-object'

describe('ID value object unit tests', () => {
  it('should get ID if id no param is passed', () => expect(new ID()).toBeTruthy())

  it('should get ID if id param is passed', () => {
    const createdId = '4b45e260-b59e-424a-8de1-144552df9f95'
    const { id } = new ID(createdId)
    expect(id).toBe(createdId)
  })
})

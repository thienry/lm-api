import { AliasFactory } from './alias.factory'
import { ID } from '@shared/domain/value-object/id.value-object'

describe('Alias factory unit tests', () => {
  it('should create an alias', () => {
    const alias = AliasFactory.create({
      aliasId: 'ROW',
      description: 'Row Locales',
      isRestricted: true,
      userId: new ID(),
      extraInfo: 'This is some extra information',
    })

    expect(alias.id).toBeDefined()
    expect(alias.aliasId).toBe('ROW')
    expect(alias.description).toBe('Row Locales')
    expect(alias.isRestricted).toBe(true)
    expect(alias.extraInfo).toBe('This is some extra information')
  })
})

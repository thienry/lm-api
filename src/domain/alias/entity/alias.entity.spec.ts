import { Alias } from './alias.entity'
import { ID } from '@shared/domain/value-object/id.value-object'

let alias: Alias

describe('Alias entity unit tests', () => {
  beforeEach(() => {
    alias = new Alias({
      id: new ID(),
      userId: new ID(),
      aliasId: 'aliasId',
      description: 'description',
    })
  })

  it('should throws when aliasID is empty', () => {
    const aliasWithouAliasID = {
      id: new ID(),
      aliasId: '',
      userId: new ID(),
      description: 'description',
    }

    expect(() => new Alias(aliasWithouAliasID)).toThrowError('Alias ID is required!')
  })

  it('should throws when description is empty', () => {
    const aliasWithoutDescription = {
      id: new ID(),
      aliasId: 'aliasId',
      userId: new ID(),
      description: '',
    }

    expect(() => new Alias(aliasWithoutDescription)).toThrowError('Description is required!')
  })

  it('should isRestricted is false by default', () => {
    expect(alias.isRestricted).toBe(false)
  })

  it('should not throws when all properties are valid', () => {
    expect(() => alias).not.toThrowError()
  })

  it('should change description', () => {
    const descriptionChanged = 'Description changed'
    alias.changeDescription(descriptionChanged)
    expect(alias.description).toBe(descriptionChanged)
  })

  it('should change extra info', () => {
    const extraInfoChanged = 'extra info changed'
    alias.changeExtraInfo(extraInfoChanged)
    expect(alias.extraInfo).toBe(extraInfoChanged)
  })

  it('should change isRestricted', () => {
    const isRestrictedChanged = true
    alias.changeIsRestricted(isRestrictedChanged)
    expect(alias.isRestricted).toBe(isRestrictedChanged)
  })

  it('should change userId', () => {
    const userId = new ID()
    alias.changeUserId(userId)
    expect(alias.userId).toBe(userId)
  })
})

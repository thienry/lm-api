import { Mapping } from './mapping.entity'
import { ID } from '@shared/domain/value-object/id.value-object'

let mapping: Mapping

describe('Mapping entity unit tests', () => {
  beforeEach(() => {
    mapping = new Mapping({
      id: new ID().id,
      key: 'key',
      userId: new ID().id,
      scriptName: 'scriptName',
    })
  })

  it('should throws when key is empty', () => {
    const mappingWithoutKey = {
      id: new ID().id,
      userId: new ID().id,
      key: '',
      scriptName: 'scriptName',
    }

    expect(() => new Mapping(mappingWithoutKey)).toThrowError('Key is required!')
  })

  it('should throws when script name is empty', () => {
    const mappingWithoutScriptName = {
      id: new ID().id,
      userId: new ID().id,
      key: 'key',
      scriptName: '',
    }

    expect(() => new Mapping(mappingWithoutScriptName)).toThrowError('Script Name is required!')
  })

  it('should not throws when all properties are valid', () => {
    expect(() => new Mapping(mapping)).not.toThrowError()
  })

  it('should change key', () => {
    const keyChanged = 'key changed'
    mapping.changeKey(keyChanged)
    expect(mapping.key).toBe(keyChanged)
  })

  it('should change script name', () => {
    const scriptNameChanged = 'script name changed'
    mapping.changeScriptName(scriptNameChanged)
    expect(mapping.scriptName).toBe(scriptNameChanged)
  })

  it('should change userId', () => {
    const userId = new ID().id
    mapping.changeUserId(userId)
    expect(mapping.userId).toBe(userId)
  })
})

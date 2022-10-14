import { MappingFactory } from './mapping.factory'
import { ID } from '@shared/domain/value-object/id.value-object'

describe('Mapping factory unit tests', () => {
  it('should create a mapping', () => {
    const mapping = MappingFactory.create({
      userId: new ID(),
      key: 'icu',
      scriptName: 'icu_script',
    })

    expect(mapping.id).toBeDefined()
    expect(mapping.key).toBe('icu')
    expect(mapping.scriptName).toBe('icu_script')
  })
})

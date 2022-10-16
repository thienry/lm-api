import { UserFactory } from './user.factory'

describe('User factory unit tests', () => {
  it('should create a mapping', () => {
    const user = UserFactory.create({
      email: 'john.doe@email.com',
      login: 'john.doe',
      name: 'John',
      password: 'test',
      surname: 'Doe',
    })

    expect(user.id).toBeDefined()
    expect(user.email).toBe('john.doe@email.com')
    expect(user.login).toBe('john.doe')
    expect(user.name).toBe('John')
    expect(user.password).toBe('test')
    expect(user.surname).toBe('Doe')
  })
})

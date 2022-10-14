import { User } from './user.entity'
import { ID } from '@shared/domain/value-object/id.value-object'

let user: User

describe('User entity unit tests', () => {
  beforeEach(() => {
    user = new User({
      id: new ID(),
      name: 'John',
      surname: 'Doe',
      login: 'john.doe',
      email: 'john.doe@email.com',
      password: 'validPassword',
    })
  })

  it('should throws when name is empty', () => {
    const userWithouName = {
      id: new ID(),
      name: '',
      surname: 'Doe',
      login: 'john.doe',
      email: 'john.doe@email.com',
      password: 'validPassword',
    }

    expect(() => new User(userWithouName)).toThrowError('Name is required!')
  })

  it('should throws when surname is empty', () => {
    const userWithoutSurname = {
      id: new ID(),
      name: 'John',
      surname: '',
      login: 'john.doe',
      email: 'john.doe@email.com',
      password: 'validPassword',
    }

    expect(() => new User(userWithoutSurname)).toThrowError('Surname is required!')
  })

  it('should throws when login is empty', () => {
    const userWithoutLogin = {
      id: new ID(),
      name: 'John',
      surname: 'Doe',
      login: '',
      email: 'john.doe@email.com',
      password: 'validPassword',
    }

    expect(() => new User(userWithoutLogin)).toThrowError('Login is required!')
  })

  it('should throws when email is empty', () => {
    const userWithoutEmail = {
      id: new ID(),
      name: 'John',
      surname: 'Doe',
      login: 'john.doe',
      email: '',
      password: 'validPassword',
    }

    expect(() => new User(userWithoutEmail)).toThrowError('Email is required!')
  })

  it('should throws when password is empty', () => {
    const userWithoutPassword = {
      id: new ID(),
      name: 'John',
      surname: 'Doe',
      login: 'john.doe',
      email: 'john.doe@email.com',
      password: '',
    }

    expect(() => new User(userWithoutPassword)).toThrowError('Password is required!')
  })

  it('should return correct full name', () => {
    const fullName = `${user.name} ${user.surname}`
    expect(user.fullName).toBe(fullName)
  })

  it('should not throws when all properties are valid', () => {
    expect(() => user).not.toThrowError()
  })

  it('should change name', () => {
    const nameChanged = 'Name changed'
    user.changeName(nameChanged)
    expect(user.name).toBe(nameChanged)
  })

  it('should change surname', () => {
    const surnameChanged = 'surname changed'
    user.changeSurname(surnameChanged)
    expect(user.surname).toBe(surnameChanged)
  })

  it('should change login', () => {
    const loginChanged = 'login changed'
    user.changeLogin(loginChanged)
    expect(user.login).toBe(loginChanged)
  })

  it('should change email', () => {
    const emailChanged = 'email changed'
    user.changeEmail(emailChanged)
    expect(user.email).toBe(emailChanged)
  })

  it('should change password', () => {
    const passwordChanged = 'password changed'
    user.changePassword(passwordChanged)
    expect(user.password).toBe(passwordChanged)
  })
})

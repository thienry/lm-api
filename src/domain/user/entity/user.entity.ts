import { BaseEntity } from '@shared/domain/entity/base.entity'
import { AggregateRoot } from '@shared/domain/entity/aggregate-root.interface'

type UserProps = {
  id?: string
  name: string
  surname: string
  login: string
  email: string
  password: string
  createdAt?: Date
  updatedAt?: Date
}

class User extends BaseEntity implements AggregateRoot {
  private _name: string
  private _surname: string
  private _email: string
  private _login: string
  private _password: string

  constructor(props: UserProps) {
    super(props.id, props.createdAt, props.updatedAt)
    this.initProps(props)
    this.validate()
  }

  initProps(props: UserProps): void {
    this._name = props.name
    this._email = props.email
    this._login = props.login
    this._surname = props.surname
    this._password = props.password
  }

  get name(): string {
    return this._name
  }

  get surname(): string {
    return this._surname
  }

  get fullName(): string {
    return `${this._name} ${this.surname}`
  }

  get email(): string {
    return this._email
  }

  get login(): string {
    return this._login
  }

  get password(): string {
    return this._password
  }

  changeName(name: string): void {
    this._name = name
  }

  changeSurname(surname: string): void {
    this._surname = surname
  }

  changeEmail(email: string): void {
    this._email = email
  }

  changeLogin(login: string): void {
    this._login = login
  }

  changePassword(password: string): void {
    this._password = password
  }

  validate(): void {
    if (!this._name) throw new Error('Name is required!')
    if (!this._surname) throw new Error('Surname is required!')
    if (!this._login) throw new Error('Login is required!')
    if (!this._email) throw new Error('Email is required!')
    if (!this._password) throw new Error('Password is required!')
  }
}

export { User }

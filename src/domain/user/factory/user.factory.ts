import { User } from '@domain/user/entity/user.entity'
import { IUser } from '@domain/user/interfaces/user.interface'

class UserFactory {
  static create(props: IUser): User {
    return new User({
      email: props.email,
      login: props.login,
      name: props.name,
      password: props.password,
      surname: props.surname,
    })
  }
}

export { UserFactory }

import User from './user-model.js'

export function createUser (userData) {
  const user = new User(userData)
  return user.save().then(() => user)
}

export function modifyUser (userData) {
  User.findById(userData.id)
    .then(user => {
      // (...)
    })
}

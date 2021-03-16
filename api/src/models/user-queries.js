import User from './user-model.js'

// CRUD
// Create
// Retrieve
// Update
// Delete

/**
 * Crée un utilisateur dans la base de données
 * 
 * @function
 * @async
 * 
 * @param {import('./user-model').UserData} userData 
 * @returns {Promise.<import('./user-model').UserMongooseDocument>}
 */
export function createUser (userData) {
  const user = new User(userData)
  return user.save().then(() => user)
}

export function getUserById(id) {
  return User.findById(id)
}

export function getUserByLogin(login) {
  return User.findOne({ login })
}

export function getUsers () {
  return User.find()
}

export function modifyUser (userData) {
  User.findById(userData.id)
    .then(user => {
      // (...)
    })
}

export function deleteUser (user) {
  User.deleteOne({ id: user.id })
}
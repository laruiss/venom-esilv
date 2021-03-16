import { createUser } from '../models/user-queries.js'

export const createUserController = async (req, res) => {
  // Récupération des données de la requête
  // (...)
  const userData = ...
  // Utilisation de createUser des queries
  try {
    const user = await createUser(userData)
    res.status(201).json({
      success: true,
      user
    })
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    })
  }
}

export const updateUserController = (req, res) => {
  // Récupération des données de la requête
  // (...)
  const userData = ...
  // Utilisation de updateUser des queries
  // (...)
}
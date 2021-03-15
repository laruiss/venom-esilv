import mongoose from 'mongoose'
import { hash } from '../utils/crypto.js'

const { Schema } = mongoose

const UserSchema = new Schema(
  {
    firstname: {
      type: String,
      required: [true, 'Le prénom est manquant'],
      trim: true
    },
    lastname: {
      type: String,
      required: [true, 'Le nom est manquant'],
      trim: true
    },
    email: {
      type: String,
      required: [true, "L'adresse email est manquante"],
      trim: true,
      lowercase: true,
      unique: true
    },
    login: {
      type: String,
      required: [true, "Le nom d'utilisateur est manquant"],
      trim: true
    },
    password: {
      type: String,
      required: [true, 'Le mot de passe est manquant']
    }
  }
)

UserSchema.set('toJSON', {
  transform (doc, ret) {
    delete ret.password
    return ret
  }
})

UserSchema.pre('save', function preSave () {
  const user = this

  if (!user.isModified('password')) {
    return
  }
  user.password = hash(user.password)
})

export default mongoose.model('User', UserSchema)

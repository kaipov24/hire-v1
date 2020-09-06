import mongoose from 'mongoose'

const usersSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  age: {
    type: String,
    required: true
  },
  skills: {
    type: [String],
    required: true
  },
  education: {
    type: String
  },
  experience: {
    type: String
  },
  about: {
    type: String
  }
})

export default mongoose.model('Users', usersSchema)

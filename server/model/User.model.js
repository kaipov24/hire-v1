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
  skills: {
    type: [String],
    required: true
  },
  education: {
    type: String
  },
  spec: {
    type: String
  },
  phone: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  languages: {
    type: String
  },
  condition: {
    type: String
  },
  age: {
    type: String,
    required: true
  },
  experience: {
    type: String
  },
  position: {
    type: String
  },
  since: {
    type: String
  },
  till: {
    type: String
  },
  highlights: {
    type: String
  },
  text: {
    type: String
  }
})

export default mongoose.model('Users', usersSchema)

import express from 'express'
import path from 'path'
import cors from 'cors'
import bodyParser from 'body-parser'
import sockjs from 'sockjs'
import { renderToStaticNodeStream } from 'react-dom/server'
import React from 'react'
import cookieParser from 'cookie-parser'
import mailgun from 'mailgun-js'

import config from './config'
import Html from '../client/html'
import User from './model/User.model'
import mongooseService from './services/mongoose'


mongooseService.connect()


const Root = () => ''

try {
  console.log(Root)
} catch (ex) {
  console.log(' run yarn build:prod to enable ssr')
}

let connections = []
const apiKey = config.apiKey
const domain = config.domain
const mg = mailgun({ apiKey, domain })
const port = process.env.PORT || 8090
const server = express()

// const { readFile, writeFile } = require('fs').promises


const sendEmail = (
  from,
  to,
  firstName,
  lastName,
  skills,
  education,
  spec,
  phone,
  email,
  job,
  position,
  since,
  till,
  highlights,
  content
) => {
  const data = {
    from,
    to,
    text: [ `
      Имя: ${firstName},
      Фамилия: ${lastName},
      Ключевые навыки: ${skills},
      Образование: ${education},
      Специальность: ${spec},
      Номер Телефона: ${phone},
      Почта: ${email},
      Место работы: ${job},
      Позиция: ${position},
      С ${since} по ${till},
      Достижения: ${highlights},
      О себе: ${content}`
    ]
  }
  return mg.messages().send(data)
}


const middleware = [
  cors(),
  express.static(path.resolve(__dirname, '../dist/assets')),
  bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }),
  bodyParser.json({ limit: '50mb', extended: true }),
  cookieParser()
]

middleware.forEach((it) => server.use(it))

server.get('/api/v1/users', async (req, res) => {
  const users = await User.find({})
  res.json(users)
})

server.get('/api/v1/users/:id', async (req, res) => {
  const { id } = req.params
  const newUser = await User.find({ _id: id })
  res.json(newUser)
})

server.post('/api/v1/users', async (req, res) => {
  const { firstName, lastName, email, age, skills, education, experience } = req.body
  const newUser = await User.create({ firstName, lastName, email, age, skills, education, experience })
  res.json(newUser)
})

server.post('/api/v1/users', async (req, res) => {
  const { firstName, lastName, email, age, skills, education, experience } = req.body
  const newUser = await User.create({
    firstName,
    lastName,
    email,
    age,
    skills,
    education,
    experience
  })
  res.json(newUser)
})

server.post('/api/v1/add', async (req, res) => {
  try {
    await sendEmail(
      req.body.from,
      req.body.to,
      req.body.firstName,
      req.body.lastName,
      req.body.skills,
      req.body.education,
      req.body.spec,
      req.body.phone,
      req.body.email,
      req.body.job,
      req.body.position,
      req.body.since,
      req.body.till,
      req.body.highlights,
      req.body.text
    )
    res.send('email sent')
  } catch (e) {
    console.log(e)
    res.status(500)
  }
})


server.delete('/api/v1/users/:id', async (req, res) => {
  const { id } = req.params
  const newUser = await User.deleteOne({ _id: id })
  res.json(newUser)
})

server.patch('/api/v1/users/:id', async (req, res) => {
  const { firstName, lastName, email, age, skills, education, experience } = req.body
  const { id } = req.params
  const newUser = await User.updateOne(
    { _id: id },
    { $set: { firstName, lastName, email, age, skills, education, experience } },
    { upsert: false }
  )
  res.json(newUser)
})

server.use('/api/', (req, res) => {
  res.status(404)
  res.end()
})

const [htmlStart, htmlEnd] = Html({
  body: 'separator',
  title: 'Skillcrucial - Become an IT HERO'
}).split('separator')

server.get('/', (req, res) => {
  const appStream = renderToStaticNodeStream(<Root location={req.url} context={{}} />)
  res.write(htmlStart)
  appStream.pipe(res, { end: false })
  appStream.on('end', () => {
    res.write(htmlEnd)
    res.end()
  })
})

server.get('/*', (req, res) => {
  const initialState = {
    location: req.url
  }

  return res.send(
    Html({
      body: '',
      initialState
    })
  )
})

const app = server.listen(port)

if (config.isSocketsEnabled) {
  const echo = sockjs.createServer()
  echo.on('connection', (conn) => {
    connections.push(conn)
    conn.on('data', async () => {})

    conn.on('close', () => {
      connections = connections.filter((c) => c.readyState !== 3)
    })
  })
  echo.installHandlers(app, { prefix: '/ws' })
}
console.log(`Serving at http://localhost:${port}`)

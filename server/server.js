import express from 'express'
import path from 'path'
import cors from 'cors'
import bodyParser from 'body-parser'
import sockjs from 'sockjs'
import { renderToStaticNodeStream } from 'react-dom/server'
import React from 'react'
import cookieParser from 'cookie-parser'

import config from './config'
import Html from '../client/html'
import User from './model/User.model'
import mongooseService from './services/mongoose'

mongooseService.connect()

// const User = new Item({
//   title: "String1",
//   category: "String1",
//   description: "String1",
//   price: "String1"
// })
// User.save()

const Root = () => ''

try {
  console.log(Root)
} catch (ex) {
  console.log(' run yarn build:prod to enable ssr')
}

let connections = []

const port = process.env.PORT || 8090
const server = express()

// const { readFile, writeFile } = require('fs').promises

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

server.post('/api/v1/users', async (req, res) => {
  const { firstName, lastName, email, age, skills, education, experience } = req.body
  const newUser = await User.create({ firstName, lastName, email, age, skills, education, experience })
  res.json(newUser)
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

// server.get('/api/v1/resumes', async (req, res) => {
//   const getResumes = await readFile(`${__dirname}/resumes.json`, { encoding: 'utf8' })
//     .then((data) => JSON.parse(data))
//     .catch(async () => [])
//   res.json(getResumes)
// })

// server.patch('/api/v1/resumes', async (req, res) => {
//   const getResumes = await readFile(`${__dirname}/resumes.json`, {
//     encoding: 'utf8'
//   }).then((data) => JSON.parse(data))
//   const newReqBody = req.body
//   newReqBody.id = +getResumes[getResumes.length - 1].id + 1 || 0
//   const newResumes = [...getResumes, newReqBody]
//   await writeFile(`${__dirname}/resumes.json`, JSON.stringify(newResumes), { encoding: 'utf8' })
//   res.json({ newResumes })
// })

// server.patch('/api/v1/resumes/:id', async (req, res) => {
//   const getResumes = await readFile(`${__dirname}/resumes.json`, {
//     encoding: 'utf8'
//   }).then((data) => JSON.parse(data))
//   const { id } = req.params
//   const { firstName, lastName, skills, experience } = req.body
//   const newResumes = getResumes.map((it) =>
//     it.id === +id ? { id: +id, firstName, lastName, skills, experience } : it
//   )
//   await writeFile(`${__dirname}/resumes.json`, JSON.stringify(newResumes), { encoding: 'utf8' })
//   res.json({ newResumes })
// })

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

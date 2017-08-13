import express from 'express'

export const startServer = () => {
  const app = express()
  app.get('/', (req, res) => {
    res.send({
      "greetings": "hello world"
    })
  })
  app.listen(8080)
}
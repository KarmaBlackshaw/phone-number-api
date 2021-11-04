const express = require('express')

module.exports = () => {
  try {
    const app = express()

    app.get('/phone-numbers', (req, res) => {
      res.send('list!')
    })

    app.post('/phone-number', (req, res) => {
      res.send('post!')
    })

    app.put('/phone-number/:id', (req, res) => {
      res.send('update!')
    })

    app.delete('/phone-number/:id', (req, res) => {
      res.send('delete!')
    })

    app.listen(process.env.APP_PORT, () => console.log(`App running at http://localhost:${process.env.APP_PORT}`))

    return app
  } catch (error) {
    console.log(error)
    throw error
  }
}

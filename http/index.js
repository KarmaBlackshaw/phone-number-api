// libs
const express = require('express')

const store = require('../store')

// helper functions
const isValidContact = num => {
  // Check if input is a number
  if (isNaN(num)) {
    console.log('invalid number')
    return false
  }

  // Check if valid starting number/country code
  const validStarts = ['09', '639', '+639']
  const number = String(num)
  const isValidCountryCode = validStarts.some(x => number.startsWith(x))
  if (!isValidCountryCode) {
    console.log('invalid country code')
    return false
  }

  // check length
  const convert = String(number)
    .replace(/^\D/, '') // remove plus sign if there is
    .replace(/^63/, '0') // replace country code that starts with 63 => 0

  if (convert.length !== 11) {
    console.log(convert)
    console.log('invalid length')
    return false
  }

  return convert
}

module.exports = () => {
  try {
    const app = express()

    app.use(express.json())

    app.get('/phone-numbers', async (req, res) => {
      try {
        const list = await store.knex('phone-numbers')

        res.send(list)
      } catch (error) {
        console.log(error)
        res.sendStatus(500)
      }
    })

    app.post('/phone-number', async (req, res) => {
      try {
        const phoneNumber = isValidContact(req.body.phone)

        if (!phoneNumber) {
          return res
            .status(422)
            .json({ message: 'Phone number must be a valid format' })
        }

        await store.knex('phone-numbers').insert({
          number: phoneNumber
        })

        res.sendStatus(200)
      } catch (error) {
        console.log(error)
        res.sendStatus(500)
      }
    })

    app.put('/phone-number/:id(\\d+)', async (req, res) => {
      try {
        const phoneNumber = isValidContact(req.body.phone)

        if (!phoneNumber) {
          return res
            .status(422)
            .json({ message: 'Phone number must be a valid format' })
        }

        const findNumber = await store.knex('phone-numbers')
          .where({ id: req.params.id })
          .select('id')
          .first()

        if (!findNumber) {
          return res
            .status(422)
            .json({ message: 'Phone number not found' })
        }

        await store.knex('phone-numbers')
          .where('id', req.params.id)
          .insert({
            number: phoneNumber
          })

        res.sendStatus(200)
      } catch (error) {
        console.log(error)
        res.sendStatus(500)
      }
    })

    app.delete('/phone-number/:id(\\d+)', async (req, res) => {
      try {
        const findNumber = await store.knex('phone-numbers')
          .where({ id: req.params.id })
          .select('id')
          .first()

        if (!findNumber) {
          return res
            .status(422)
            .json({ message: 'Phone number not found' })
        }

        await store.knex('phone-numbers')
          .where({ id: req.params.id })
          .del()

        res.sendStatus(200)
      } catch (error) {
        console.log(error)
        res.sendStatus(500)
      }
    })

    app.listen(process.env.APP_PORT, () => console.log(`App running at http://localhost:${process.env.APP_PORT}`))

    return app
  } catch (error) {
    console.log(error)
    throw error
  }
}

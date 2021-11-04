require('dotenv').config()

const client = process.env.DB_CLIENT || 'mysql'
const host = process.env.DB_HOST || '127.0.0.1'
const user = process.env.DB_USER || 'root'
const password = process.env.DB_PASS || ''
const database = process.env.DB_NAME || ''

export default {
  client: client || 'mysql',

  migrations: {
    directory: './knex/migrations'
  },

  connection: {
    host,
    user,
    password,
    database
  }
}

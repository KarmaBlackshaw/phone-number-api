const knex = require('knex')
const knexfile = require('../knexfile')

export default {
  knex: null,

  start() {
    try {
      this.knex = knex(knexfile)
      console.log('Connected to the database')
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}

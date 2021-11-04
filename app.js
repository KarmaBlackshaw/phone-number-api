// Bootstrap services here

require('dotenv').config()

try {
  require('./store').start()
  require('./http')()
} catch (error) {
  console.error(error)
}

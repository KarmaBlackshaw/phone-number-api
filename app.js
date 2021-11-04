// Bootstrap services here

require('dotenv').config()

try {
  require('./http')()
  require('./store').start()
} catch (error) {
  console.error(error)
}

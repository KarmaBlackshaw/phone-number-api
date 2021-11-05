// Bootstrap services here
import 'dotenv/config'

import store from './store'
import http from './http'

try {
  store.start()
  http()
} catch (error) {
  console.error(error)
}

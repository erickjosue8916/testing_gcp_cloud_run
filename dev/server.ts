import { config } from "./config/index";
import express from './services/express'
import controller from './controllers'
import http from 'http'

const { port, ip, env, apiRoot } = config
const app = express(apiRoot, controller)

const server = http.createServer(app)

app.disable('etag')

setImmediate(() => {
  server.listen(port, () => {
    console.log(`| TESTING | listening on http://127.0.0.1:${port}, in ${env} mode`)
  })
})
export default app
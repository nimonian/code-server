const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const nocache = require('nocache')
const { createProxyMiddleware } = require('http-proxy-middleware')
const getPort = require('./middleware/getPort')

const app = express()

app.use(express.json())
app.use(cors())
app.use(nocache())
app.use(morgan('tiny'))

const proxy = createProxyMiddleware({
  ws: true,
  changeOrigin: false,
  router: async req => {
    const port = req.headers.host.split('.').at(0)
    return `http://127.0.0.1:${port}/`
  }
})

app.use(getPort, proxy)

app.listen(5000, () => console.log('Server listening on 5000'))

const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const { createProxyMiddleware } = require('http-proxy-middleware')
// const getPort = require('./middleware/getPort')
// const Docker = require('./lib/docker')

const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.listen(5000, () => console.log('Server listening on 5000'))

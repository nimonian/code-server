const axios = require('axios').default
const Docker = require('../lib/docker')
const genid = require('../lib/genid')
const wait = require('../lib/wait')

async function getPort(req, res, next) {
  const subdomain = req.headers.host.split('.').at(0)

  if (subdomain === 'code') {
    const container = await Docker.createContainer(genid())

    let count = 0
    while (count < 10) {
      try {
        const ping = await axios.get(`http://localhost:${container.port}`)
        if (ping.status === 200) break
      } catch (err) {
        console.error(err.code)
      } finally {
        count++
        await wait(1)
      }
    }

    return res.redirect(`http://${container.port}.code.multiverse.io`)
  }

  return next()
}

module.exports = getPort

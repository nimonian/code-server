const Docker = require('../lib/docker')

async function getPort(req, _res, next) {
  // const { user } = req.params
  const user = 'dojo'
  const container =
    (await Docker.getContainer(user)) || (await Docker.createContainer(user))
  req.port = container.getPort()
  next()
}

module.exports = getPort

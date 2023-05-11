const portfinder = require('portfinder')
const exec = require('./exec')
const Container = require('./container')

class Docker {
  static async getContainer(user) {
    const cmd = `docker container inspect ${user}-sandbox --format '{{json .}}'`

    try {
      const { stdout } = await exec(cmd)
      const data = JSON.parse(stdout)
      return new Container(data)
    } catch (err) {
      if (err.code === 1) {
        return null
      } else {
        console.error(err)
        throw new Error('Error finding container')
      }
    }
  }

  static async createContainer(user) {
    const name = `${user}-sandbox`
    const port = await portfinder.getPortPromise()
    const cmd = `docker run -d -p ${port}:8080 -h ${user} --name ${name} -m 1024m --cpus=1 mv-code-server --auth none --disable-telemetry`
    await exec(cmd)
    return Docker.getContainer(user)
  }

  static async killContainers() {
    try {
      await exec('docker kill $(docker ps -q)')
    } catch (err) {
      if (err.code !== 1) throw new Error(err)
    }
  }

  static async removeContainers() {
    try {
      await exec('docker rm $(docker ps -a -q)')
    } catch (err) {
      if (err.code !== 1) throw new Error(err)
    }
  }
}

module.exports = Docker

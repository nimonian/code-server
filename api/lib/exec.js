const process = require('child_process')
const util = require('util')

const exec = util.promisify(process.exec)

module.exports = exec

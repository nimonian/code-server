const { customAlphabet } = require('nanoid')

const genid = customAlphabet(
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890',
  8
)

module.exports = genid

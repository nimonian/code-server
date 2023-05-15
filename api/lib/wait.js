const wait = t =>
  new Promise((res, _rej) => {
    setTimeout(() => res('tick'), t * 1000)
  })

module.exports = wait

class Container {
  constructor(data) {
    Object.keys(data).forEach(k => (this[k] = data[k]))
  }

  get port() {
    const bindings = this.HostConfig.PortBindings['8080/tcp']
    return bindings && bindings[0] && bindings[0].HostPort
  }
}

module.exports = Container

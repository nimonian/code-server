Vagrant.configure("2") do |config|

    config.vm.hostname = "multiverse"
  
    config.vm.box = "ubuntu/focal64"
  
    config.vm.define "multiverse-box"
  
    config.vm.network "private_network", ip: "192.168.56.10"
  
    config.vm.provider "virtualbox" do |vb|
      vb.cpus = 2
      vb.memory = "2048"
      vb.name = "multiverse"
    end
  
  end
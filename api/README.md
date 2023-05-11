# MV Code Server

## VM

Boot the vm

```bash
host:~$ vagrant up
host:~$ vagrant ssh multiverse-box
```

Install NodeJS

```bash
vm:~$ curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash
vm:~$ sudo apt-get install -y nodejs
```

Install vscode

```bash
vm:~$ sudo apt update

# dependencies
vm:~$ sudo apt install software-properties-common apt-transport-https wget -y

# trust microsoft
vm:~$ wget -q https://packages.microsoft.com/keys/microsoft.asc -O- | sudo apt-key add -

# connect to their repo
vm:~$ sudo add-apt-repository "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main"

vm:~$ sudo apt install code
```

Install docker

```bash
# update
sudo apt-get update
sudo apt-get install ca-certificates curl gnupg

# add key
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg

# add repo
echo "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu "$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# update again
sudo apt-get update

# install
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# create group
sudo groupadd docker

# add yourself to it
sudo usermod -aG docker $USER

# refresh group settings
newgrp docker

# try this
docker run hello-world

# if you have trouble
sudo chown "$USER":"$USER" /home/"$USER"/.docker -R
sudo chmod g+rwx "$HOME/.docker" -R

# start on boot
sudo systemctl enable docker.service
sudo systemctl enable containerd.service
```

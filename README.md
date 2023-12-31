# code.multiverse.io

## What?

[Explanatory video](https://www.loom.com/share/6e1d622752f14035b20721c612037526)

The aim is to create a "remote development service" for apprentices, so that
they can work in a container on a virtual machine.

## Why?

This means that apprentices can always access a consistent development
experience:

- no installation issues

- using VS Code direclty in their browser

- no lists of stuff to unblock for clients

- use the terminal to interact with any website (including github)

As http requests originate in the VM, problems of acessing e.g. github
completely go away.

There are a few possible futures for this:

- it is used for apprentices who are having technical issues, can't get stuff
  unblocked or installed

- it is used to give a turnkey service to certain clients and their apprentices

- it is used as standard for all apprentices

## How?

- A cloud VM exposes an API at `code.multiverse.io`

- When visited, it provisions a Docker container running VS Code on Ubuntu and
  exposes `$PORT` to the VM network

- The user is redirected to `$PORT`.code.multiverse.io where they are proxied to
  `localhost:$PORT` in the VM

- And they can dev away

## Next

Auth, persisted storage, auto-scaling, auto-kill dead containers, security

## To recreate the demo

1. Make sure you have Vagrant and Virtualbox installed

2. Open a terminal in the project root and run `vagrant up`

3. SSH into the VM with `vagrant ssh multiverse-box`

4. Install node/npm, nginx and docker (you're in Ubuntu)

5. Replace `/etc/nginx/nginx.conf` with the `nginx.conf` file in this repo, and
   then `sudo nginx -t && systemctl start nginx` to test and load the config.

6. From within the VM, `cd repos/code-server-api` and `npm i && npm run dev`

7. Back on your host machine, edit `/etc/hosts` to point `code.multiverse.io` at
   `192.168.56.10`

8. Now visit `code.multiverse.io` in your browser

FROM ubuntu:latest

RUN apt-get update && apt-get install -y curl

RUN curl -fsSL https://code-server.dev/install.sh | sh

RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash

RUN apt-get install -y nodejs

EXPOSE 8080

ENTRYPOINT ["code-server", "--host", "0.0.0.0"]

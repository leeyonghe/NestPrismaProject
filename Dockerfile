FROM node:latest

RUN apt update

RUN npm i -g @nestjs/cli

WORKDIR /main
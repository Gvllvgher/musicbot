FROM node:latest

LABEL org.opencontainers.image.source=https://github.com/Gvllvgher/musicbot

WORKDIR /usr/src/app

COPY dashboard/ ./

CMD ["npm", "run", "build-and-start"]
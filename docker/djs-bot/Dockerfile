FROM node:20

LABEL org.opencontainers.image.source=https://github.com/Gvllvgher/musicbot

WORKDIR /usr/src/app

COPY djs-bot/ ./

RUN apt-get update -y && \
    apt-get install -y \
      build-essential \
      libpango1.0-dev \
      libcairo2-dev \
      librsvg2-dev \
      libjpeg-dev \
      libgif-dev

CMD ["npm", "run", "update", "&&", "npm", "run", "start"]
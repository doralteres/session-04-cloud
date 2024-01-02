FROM node:20

WORKDIR /usr/lib/app

ENV NODE_ENV=production

COPY . .

RUN yarn

CMD [ "yarn", "start" ]
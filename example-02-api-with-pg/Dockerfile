FROM node:22

WORKDIR /usr/lib/app

COPY . .

RUN npm install

ENV NODE_ENV=production

CMD [ "npm", "start" ]
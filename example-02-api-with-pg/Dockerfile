FROM node:22

WORKDIR /usr/lib/app

ENV NODE_ENV=production

COPY . .

RUN npm install

CMD [ "npm", "start" ]
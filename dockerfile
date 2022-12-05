
FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install build

CMD [ "npm RUN", "start:dev" ]
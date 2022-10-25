FROM node:16-alpine As development

WORKDIR /usr/src/App

COPY package*.json ./  

RUN npm i

COPY . .

CMD npm run start:dev
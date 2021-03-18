FROM node:12

WORKDIR /usr/src

COPY package*.json ./

RUN npm install

COPY . .

RUN npm test

EXPOSE 3000

CMD ["npm", "start"]

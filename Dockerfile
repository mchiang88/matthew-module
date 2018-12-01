FROM node:8

WORKDIR /sdc/comments

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 80

CMD ["npm", "run", "server"]
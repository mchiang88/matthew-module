FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 80

ARG HOSTNAME
ENV HOSTNAME ec2-3-16-136-135.us-east-2.compute.amazonaws.com

ARG PORT
ENV PORT 80

RUN npm run build

CMD [ "npm", "start"]
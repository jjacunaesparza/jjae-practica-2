FROM --platform=linux/amd64 node:20-alpine

WORKDIR /usr/app

COPY . .

RUN npm i

EXPOSE 3000

CMD ["npm", "start"]
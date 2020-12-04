
FROM node:14.15.1-alpine
WORKDIR /usr/src/app
COPY package.json .
RUN npm install --silent
CMD [ "npm", "start" ]
COPY . .
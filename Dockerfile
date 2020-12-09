# FROM node:13.10.1
# RUN mkdir /app
# ADD . /app
# WORKDIR /app
# RUN npm install
# CMD ["node", "server/index.js"]

FROM node:13.10.1
RUN mkdir /app2
ADD . /app2
WORKDIR /app2

COPY package*.json ./

RUN npm install
COPY . .
EXPOSE 3001

CMD [ "npm", "start" ]
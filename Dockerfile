FROM node:13.10.1
RUN mkdir /app
ADD . /app
WORKDIR /app
RUN npm install
CMD ["node", "server/index.js"]

# docker build github.com/creack/docker-firefox
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

# docker run --name=mysql1 -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=secret mysql/mysql-server

# echo the pw
# echo $MYSQL_ROOT_PASSWORD
# docker build github.com/creack/docker-firefox

# docker exec -it 60bf171f615b mysql --local-infile -uroot -p
# docker cp questions-clean.csv 60bf171f615b:/cleaned-data/questions-cleaned.csv

# copy csv file into docker container
# docker cp questions-clean.csv 60bf171f615b:/cleaned-data/questions-cleaned.csv
# docker cp <filename> <container name>:/cleaned-data/questions-cleaned.csv

CMD [ "npm", "start" ]

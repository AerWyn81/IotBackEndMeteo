# Use a lighter version of Node as a parent image
FROM mhart/alpine-node:8.11.4
WORKDIR /client
# copy package.json into the container at /api
COPY package*.json /client/
RUN npm install
COPY . /client/
EXPOSE 3000
CMD [ "npm", "start" ]

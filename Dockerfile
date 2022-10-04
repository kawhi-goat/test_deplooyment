# Dockerfile
FROM node:17.1.0 as build

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ENV PATH usr/src/app/node_modules/.bin:$PATH

# Install app dependencies
COPY package.json /usr/src/app/
COPY package-lock.json /usr/src/app/
COPY nginx.conf ./

RUN npm install react-scripts

# Bundle app source
COPY . /usr/src/app

# Build and optimize react app
RUN npm run build

EXPOSE 80

# defined in package.json
CMD ["nginx", "-g", "daemon off;"]

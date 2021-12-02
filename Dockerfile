FROM node:12.14.0 AS build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]
EXPOSE 3000
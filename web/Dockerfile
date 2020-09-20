from node:12
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn build
EXPOSE 8080
CMD [ "yarn", "start"]
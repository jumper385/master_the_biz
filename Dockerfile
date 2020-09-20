from node:12
WORKDIR /app
COPY package*.json ./
RUN yarn install
RUN yarn build
COPY . .
EXPOSE 8080
CMD [ "yarn", "start"]
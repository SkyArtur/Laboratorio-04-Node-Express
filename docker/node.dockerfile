FROM node:21
ENV NODE_ENV=production
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./
RUN npm install
COPY .. .
COPY --chown=node:node .. .
USER node
RUN node config.js
EXPOSE 3000
CMD [ "npm", "start" ]
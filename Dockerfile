FROM node:12-alpine
WORKDIR /app
RUN npm install api-client-generator
ENTRYPOINT [ "/app/node_modules/.bin/api-client-generator" ]

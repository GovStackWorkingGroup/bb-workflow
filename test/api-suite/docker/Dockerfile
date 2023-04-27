FROM node:18-alpine

RUN apk --no-cache add curl

COPY ./ /app/api-suite
WORKDIR /app/api-suite

RUN npm install --loglevel=error
RUN ls docker
ENTRYPOINT ["/app/api-suite/docker/entrypoint.sh"]

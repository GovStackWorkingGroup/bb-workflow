FROM node:14-alpine

RUN apk --no-cache add curl

COPY ./ /app
WORKDIR /app
RUN npm install --loglevel=error
RUN ls docker
ENTRYPOINT ["/app/docker/entrypoint.sh"]
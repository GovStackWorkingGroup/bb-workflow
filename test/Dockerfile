FROM node:18

COPY . /tests

WORKDIR /tests/

RUN corepack enable

CMD yarn test
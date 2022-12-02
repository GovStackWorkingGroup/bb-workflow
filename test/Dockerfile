FROM node:18

COPY . /tests

WORKDIR /tests/

RUN corepack enable

RUN yarn install

CMD yarn test
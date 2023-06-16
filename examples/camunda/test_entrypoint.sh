#! /usr/bin/env bash

cp .env.example .env && docker-compose up -d

# move this into docker compose?
curl -X POST -d '{ name: "John Doe" }' http://localhost:4000/api/createPatient
curl -X POST -d '{ date: "2023-03-12", patient: "John Doe" }' http://localhost:4000/api/createVisit

# move this into NodeJs script?
token = curl -X POST -d '{ username: "admin", password: "welcome123" }' http://localhost:4000/api/login

# basically, do whatever you want so long as you return the required info and confirm that your app is
# now up and running in the required docker network
{ apiToken: token }

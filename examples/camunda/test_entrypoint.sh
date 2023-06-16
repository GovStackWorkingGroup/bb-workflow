#! /usr/bin/env bash

cp .env.example .env && docker-compose up -d

curl -X POST -d '{ name: "John Doe" }' http://localhost:4000/api/createPatient
curl -X POST -d '{ date: "2023-03-12", patient: "John Doe" }' http://localhost:4000/api/createVisit

token = curl -X POST -d '{ username: "admin", password: "welcome123" }' http://localhost:4000/api/login

{ apiToken: token }

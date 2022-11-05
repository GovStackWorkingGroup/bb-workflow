#! /usr/bin/env bash

cp .env.example .env && docker-compose -f docker-compose-update.yml up -d

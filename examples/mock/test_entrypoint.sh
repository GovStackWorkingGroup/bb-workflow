#! /usr/bin/env bash

# Make a copy of the API spec
#cp ../../api/workflow-engine.yaml ./api/workflow-engine.yaml
cp ../../api/workflow-engine.yaml ./api/

# Start the docker compose/build process to serve the spec via Prism
docker compose up -d

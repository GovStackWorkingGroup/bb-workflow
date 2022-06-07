# GovStack Workflow Demos

Tools for creating GovStack "API Adaptors" and demonstrating how various
applications can achieve compliance with the
[GovStack Workflow BB Api Specification](https://app.swaggerhub.com/apis-docs/GovStack/Workflow-BB/1.0.0#/developers).

Note that this same adaptor pattern (using Caddy) can be used to create adaptors
for any GovStack building block specification, and may be used to mock BB
endpoints that have not yet been developed.

## Prerequisites

You need to have Docker and Docker Compose up and running to be able to run this
repo. Install Docker and Docker Compose [here](https://docs.docker.com/).

After installing Docker, you may need to follow the steps
[here](https://docs.docker.com/engine/install/linux-postinstall/#manage-docker-as-a-non-root-user)
in order to execute Docker and Docker Compose without sudo.

## Configure

To set up a demo, `cd` into that applications folder, copy the example env, set
your own secrets, then start up via docker compose.

- `git clone git@github.com:OpenFn/govstack-workflow-demos.git`
- `cd govstack-workflow-demos`
- `cd << camunda || lightning || n8n || ...more >>`
- `cp .env.example .env`
- `vim .env` to change you secrets
- (Optionally `vim Caddyfile` to swap out the site address `localhost` for
  `http://136.164.122.12` or `yoursite.com`.)
- `docker compose up -d`

## Stop / Rebuild /Start

- stop: `docker compose down`
- rebuild: `docker compose build`
- start: `docker compose up -d`

## Test the APIs GovStack Workflow BB APIs

1. `curl -k https://localhost/processes`
2. `curl -k https://localhost/processes/14`
3. `curl -k -X POST https://localhost/processes/14/start`
4. `curl -k https://localhost/instances`
5. `curl -k https://localhost/instances/12`

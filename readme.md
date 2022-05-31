# GovStack Sample

A sample repository for GovStack integration with n8n

## Prerequities

You need to have Docker and Docker Compose up and running to be able to run this repo.
Install Docker and Docker Compose [here](https://docs.docker.com/).

After installing Docker, you may need to follow the steps [here](https://docs.docker.com/engine/install/linux-postinstall/#manage-docker-as-a-non-root-user) in order to execute Docker and Docker Compose without sudo.

## Configure

Rename the `.env.example` file to `.env`. Edit it to set your own environment variable values. That file allows you to define the n8n username and password and also the n8n and Caddy config files paths.

## Start / Stop

- To start:

```bash
docker compose up -d
```

- To stop:

```bash
docker compose down
```

NB: n8n is accessible in `https://127.0.0.1:5678/` and the Caddy server is accessible in `http://127.0.0.1:80`.

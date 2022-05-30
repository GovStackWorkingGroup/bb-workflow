# GovStack Sample

A sample repository for GovStack integration with n8n

## Configure / Start / Stop

- Your first need to build the docker image:

```bash
sudo docker build -t govstack-sample:latest .
```

- Then to start it, run this command:

```bash
sudo docker compose up -d
```

- To stop it, run this command:

```bash
sudo docker compose stop
```

FROM caddy:latest

# Lightning allows multiple projects per instance. Processes and runs are scoped
# by project. Choose the project to use for this Workflow BB implementation here.
ENV PROJECT_UUID=123

# Configure Caddy in the image build, so we don't rely on persistent volumes.
COPY Caddyfile /etc/caddy/Caddyfile
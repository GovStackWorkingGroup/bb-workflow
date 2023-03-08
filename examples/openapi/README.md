# OpenAPI spec test

This test ensures that OpenAPI descriptions of Workflow BB are usable by IM.
X-Road standalone security server is deployed and configured. For mocking endpoints Caddy instance is used.
All API specifications from `api` directory of repo is loaded.
All this is done by calling

```
./test_entrypoint.sh
```

In process of setup you must enter Ansible Vault password.

Test checks that services are discoverable and endpoints are invocable.

```
./run-test.sh
```


# Test Plan for the Workflow BB

1. All `examples` must be runnable via `docker compose up`.

2. Tests in `/test` will include the expected HTTP status codes for the 5
   current endpoints.

3. Via a basic SSH script (maybe github actions? maybe a circleCI config?) we
   will recurse through the `examples` directory, run `docker compose up` for
   each example, wait until we get a running set of containers, and then execute
   the 5 api endpoint tests for _that_ example.

The output will be a ✅ or ❌ for _each_ example, for each of the 5 tests.

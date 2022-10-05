# Test Plan for the Workflow BB

1. All `examples` must be runnable via `docker compose up`.

2. Tests in `/test` will include the expected HTTP status codes for the 5
   current endpoints.

3. Via a basic SSH script (maybe github actions? maybe a circleCI config?) we
   will recurse through the `examples` directory, run `docker compose up` for
   each example, wait until we get a running set of containers, and then execute
   the 5 api endpoint tests for _that_ example.

The output will be a ✅ or ❌ for _each_ example, for each of the 5 tests.

## Comments

@farai - How do we test an actual workflow process? (do we set up each example
with a "fixture" - a standard workflow that must be configured for each example
application.)

@aare - Several steps... first check endpoints. Next, specify a series of
workflows that the engine must be able to perform.

@taylor - if we define what we expect the output of a business process to be,
given a certain input and theoretical steps, could we ask the "owner" of each
candidate application to "create a process with id N, which when executed does
X, Y, and Z".

**Next Step:** come up with the "canonical workflow processes" that we want to
test and document them in a BPMN diagram.

- @aare - should we use yaml? json? we must have a textual definition of these
  canonical worfklows

## Levels of Tests

1. ensure that application can be launched via docker with a adaptor and a
   security server
2. check that all defined API endpoints in the openAPI-spec.yaml return proper
   response codes
3. check input/output/result for canonical workflow processes

## Implementation

# Start

## For each `example` -> if we could box this up.

---

### Start it via docker and make sure it is running

1. every `example` must have a single "start" script which does all the setup
   and config to create a passing instance for the tests.

### Run all the cucumber tests against that image

1. localhost:443/api/processes
2. localhost:443/api/processes/13
3. localhost:443/api/processes_instances
4. ...blah

### Shut down the container

---

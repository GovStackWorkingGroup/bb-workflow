const assert = require('assert');
const { When, Then } = require('@cucumber/cucumber');

// TODO: is this the best way to allow insecure ssl?
// TODO: and do we want to?

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

When('we request a list of processes from the api', async function () {
  this.whatIHeard = await fetch('https://localhost/processes');
})

Then('we receive {int} processes', async function (expectedResponse) {
  const resp = this.whatIHeard;
  assert.equal(resp.status, 200);

  const data = await resp.json();
  assert.equal(data.length, expectedResponse);
});

When('we request a list of instances from the api', async function () {
  this.whatIHeard = await fetch('https://localhost/instances');
})

Then('we receive status code {int} for the instances', async function (expectedResponse) {
  const resp = this.whatIHeard;
  assert.equal(resp.status, 200);

  //const data = await resp.json();
  //assert.equal(data.length, expectedResponse);
});

When('We request the details of an existing workflow processes from the api', async function () {
  this.whatIHeard = await fetch('https://localhost/processes/ReviewInvoice:1:bf20fe53-5548-11ed-9dd4-0242ac150002');
})

Then('we receive status code {int} for the workflow process', async function (expectedResponse) {
  const resp = this.whatIHeard;
  assert.equal(resp.status, expectedResponse);
});

When('We request the details of an existing workflow processes instance from the api', async function () {
  this.whatIHeard = await fetch('https://localhost/instances/c0717272-5548-11ed-9dd4-0242ac150002');
})

Then('we receive status code {int} for the workflow process instance', async function (expectedResponse) {
  const resp = this.whatIHeard;
  assert.equal(resp.status, expectedResponse);
});

When('We request to start a workflow process from the api', async function () {
  let payload = JSON.stringify({"name": "Test"})
  this.whatIHeard = await fetch('https://localhost/processes/ReviewInvoice:1:bf20fe53-5548-11ed-9dd4-0242ac150002/start', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: payload
  });
})

Then('we receive status code {int} to confirm success', async function (expectedResponse) {
  const resp = await this.whatIHeard;
  assert.equal(resp.status, expectedResponse);
});


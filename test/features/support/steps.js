const assert = require('assert');
const { When, Then } = require('@cucumber/cucumber');

// TODO: is this the best way to allow insecure ssl?
// TODO: and do we want to?

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

When('we request a list of processes from the api', async function () {
  this.whatIHeard = await fetch('https://localhost/processes');
});

Then('we receive {int} processes', async function (expectedResponse) {
  const data = await this.whatIHeard.json();
  assert.equal(data.length, expectedResponse);
});

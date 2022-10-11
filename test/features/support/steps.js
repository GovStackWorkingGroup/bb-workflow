const assert = require('assert');
const { When, Then } = require('@cucumber/cucumber');

When('we request a list of processes', async function () {
  this.whatIHeard = await fetch('localhost/api/processes');
});

Then('we receive {int} processes', async function (expectedResponse) {
  const data = await this.whatIHeard.json();
  assert.equal(data.length, expectedResponse);
});

const assert = require('assert');
const { When, Then } = require('@cucumber/cucumber');

When('we request a list of processes', async function () {
  this.whatIHeard = await fetch('https://jsonplaceholder.typicode.com/todos/');
});

Then('we receive {int} processes', async function (expectedResponse) {
  console.log('yay!');
  const data = await this.whatIHeard.json();
  assert.equal(data.length, 200);
});

const assert = require('assert');
const util = require('../../features/support/util.js')
const endpoints = require('../../features/support/endpoints.json')
const readYamlFile = require('read-yaml-file')
const { When, Then } = require('@cucumber/cucumber')


// TODO: is this the best way to allow insecure ssl?
// TODO: and do we want to?
const urlBase = "https://localhost"

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

When('we request a list of processes from the api', async function () {
  let queryUrl = urlBase + endpoints.props[endpoints.processList].uri
  console.log('QueryUrl : ' + queryUrl)
  
  this.whatIHeard = await fetch(queryUrl)
})

Then('we receive', async function () {

  
  let yamlData;
  const resp = this.whatIHeard;

  //1) Fetch OpenAPI spec

  //2) Parse OpenAPI YAML
  await readYamlFile('../test/features/support/swagger.yaml').then(data => {
    yamlData = data  

    assert.equal(resp.status, 200)

    //3) Fetch Component Reference
    const expectedComponent = yamlData.paths[endpoints.props[endpoints.processList].uri].get.responses["200"].content["application/json"].schema.items["$ref"]
    
    console.log(JSON.stringify(expectedComponent))    
  });

  const data = await resp.json();
  assert.notEqual(data.length, 0);
});

When('we request a list of instances from the api', async function () {
  this.whatIHeard = await fetch('https://localhost/instances');
})

Then('we receive status code {int} for the instances', async function (expectedResponse) {
  const resp = this.whatIHeard;
  assert.equal(resp.status, 200);
});

When('We request the details of an existing workflow processes from the api', async function () {
  let response = await fetch('https://localhost/processes')
  let processList = await response.json()
  let processQueryUrl = 'https://localhost/processes/' + processList[0].id;

  this.whatIHeard = await fetch(processQueryUrl)
})

Then('we receive status code {int} for the workflow process', async function (expectedResponse) {
  const resp = this.whatIHeard;
  assert.equal(resp.status, expectedResponse);
});

When('We request the details of an existing workflow processes instance from the api', async function () {
  let response = await fetch('https://localhost/instances');
  let instanceList = await response.json();
  let instanceQueryUrl = 'https://localhost/instances/' + instanceList[0].id;

  this.whatIHeard = await fetch(instanceQueryUrl);
})

Then('we receive status code {int} for the workflow process instance', async function (expectedResponse) {
  const resp = this.whatIHeard;
  assert.equal(resp.status, expectedResponse);
});

When('We request to start a workflow process from the api', async function () {
  let payload = JSON.stringify({ "name": "Test" })
  let response = await fetch('https://localhost/processes')
  let processList = await response.json()
  let processQueryUrl = 'https://localhost/processes/' + processList[0].id + '/start';

  this.whatIHeard = await fetch(processQueryUrl, {
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


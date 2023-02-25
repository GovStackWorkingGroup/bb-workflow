const assert = require('assert');
const readYaml = require('read-yaml');
const { When, Then, Given } = require('@cucumber/cucumber');
const { read } = require('fs');

var workflowData = null;
var processData = null;
var instanceData = null;
var processInstanceData = null;
var processStart = null;
var apiSpec = null;

// TODO: is this the best way to allow insecure ssl?
// TODO: and do we want to?

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

function loadApiSpec() {
  readYaml('../api/swagger.yaml', function (err, data) {
    apiSpec = JSON.parse(JSON.stringify(data));
  });
}

loadApiSpec();

When('we request a list of processes from the api', async function () {
  this.whatIHeard = await fetch('https://localhost/processes');
});

Then(
  'we receive status code {int} for the processes',
  async function (expectedResponse) {
    const resp = this.whatIHeard;
    workflowData = await resp.json();

    assert.equal(resp.status, 200);
  }
);

Then('process fields are aligned to api spec', function (expectedResponse) {
  const componentFields =
    apiSpec.components.schemas.ProcessDefinition.properties;
  const componentFieldNames = Object.keys(componentFields);

  const sampleObject = workflowData.find(e => e.id != null);
  const sampleObjectFields = Object.keys(sampleObject);

  let matchedFieldsCount = 0;

  //Compare workflow object against component fields
  for (let x = 0; x < componentFieldNames.length; x++) {
    if (sampleObjectFields.find(e => e == componentFieldNames[x]) != null)
      matchedFieldsCount += 1;
  }

  assert.equal(matchedFieldsCount, componentFieldNames.length);
});

When('we request a list of instances from the api', async function () {
  this.whatIHeard = await fetch('https://localhost/instances');
});

Then(
  'we receive status code {int} for the instances',
  async function (expectedResponse) {
    const resp = this.whatIHeard;
    instanceData = await resp.json();

    assert.equal(resp.status, 200);
  }
);

Then('instance fields are aligned to api spec', function (expectedResponse) {
  const componentFields = apiSpec.components.schemas.ProcessInstance.properties;
  const componentFieldNames = Object.keys(componentFields);
  const sampleInstance = instanceData.find(e => e.id != null);
  const instanceFieldNames = Object.keys(sampleInstance);

  let matchedFieldsCount = 0;

  for (let x = 0; x < componentFieldNames.length; x++) {
    if (instanceFieldNames.find(e => e == componentFieldNames[x]) != null)
      matchedFieldsCount += 1;
  }

  assert.equal(matchedFieldsCount, componentFieldNames.length);
});

When(
  'We request the details of an existing workflow processes from the api',
  async function () {
    //Fetch single process
    const response = await fetch('https://localhost/processes');
    const processList = await response.json();
    const processQueryUrl = 'https://localhost/processes/' + processList[0].id;

    this.whatIHeard = await fetch(processQueryUrl);
  }
);

Then(
  'we receive status code {int} for the workflow process',
  async function (expectedResponse) {
    const resp = this.whatIHeard;
    processData = await resp.json();

    assert.equal(resp.status, expectedResponse);
  }
);

Then(
  'workflow process fields are aligned to api spec',
  function (expectedResponse) {
    const componentFields =
      apiSpec.components.schemas.ProcessDefinition.properties;
    const componentFieldNames = Object.keys(componentFields);
    const sampleProcessFields = Object.keys(processData);

    let matchedFieldsCount = 0;

    //Compare workflow object against component fields
    for (let x = 0; x < componentFieldNames.length; x++) {
      if (sampleProcessFields.find(e => e == componentFieldNames[x]) != null)
        matchedFieldsCount += 1;
    }

    assert.equal(matchedFieldsCount, componentFieldNames.length);
  }
);

When(
  'We request the details of an existing workflow processes instance from the api',
  async function () {
    const response = await fetch('https://localhost/instances');
    const instanceList = await response.json();
    const instanceQueryUrl =
      'https://localhost/instances/' + instanceList[0].id;

    this.whatIHeard = await fetch(instanceQueryUrl);
  }
);

Then(
  'we receive status code {int} for the workflow process instance',
  async function (expectedResponse) {
    const resp = this.whatIHeard;
    processInstanceData = await resp.json();

    assert.equal(resp.status, expectedResponse);
  }
);

Then(
  'workflow process instance fields are aligned to api spec',
  function (expectedResponse) {
    const componentFields =
      apiSpec.components.schemas.ProcessInstance.properties;
    const componentFieldNames = Object.keys(componentFields);
    const instanceFieldNames = Object.keys(processInstanceData);

    let matchedFieldsCount = 0;

    for (let x = 0; x < componentFieldNames.length; x++) {
      if (instanceFieldNames.find(e => e == componentFieldNames[x]) != null)
        matchedFieldsCount += 1;
    }

    assert.equal(matchedFieldsCount, componentFieldNames.length);
  }
);

When('We request to start a workflow process from the api', async function () {
  const payload = JSON.stringify({ name: 'Test' });
  const response = await fetch('https://localhost/processes');
  const processList = await response.json();
  const processQueryUrl =
    'https://localhost/processes/' + processList[0].id + '/start';

  this.whatIHeard = await fetch(processQueryUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: payload,
  });
});

Then(
  'we receive status code {int} to confirm success',
  async function (expectedResponse) {
    const resp = await this.whatIHeard;
    processStart = await resp.json();

    assert.equal(resp.status, expectedResponse);
  }
);

Then(
  'started workflow process fields are aligned to api spec',
  function (expectedResponse) {
    const componentFields =
      apiSpec.paths['/processes/{processId}/start'].post.responses['201']
        .content['application/json'].schema.properties;
    const componentFieldNames = Object.keys(componentFields);
    const processStartFieldNames = Object.keys(processStart);

    let matchedFieldsCount = 0;

    for (let x = 0; x < componentFieldNames.length; x++) {
      if (processStartFieldNames.find(e => e == componentFieldNames[x]) != null)
        matchedFieldsCount += 1;
    }

    assert.equal(matchedFieldsCount, componentFieldNames.length);
  }
);

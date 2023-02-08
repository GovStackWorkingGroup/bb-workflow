const assert = require('assert');
const readYaml = require('read-yaml')
const { When, Then } = require('@cucumber/cucumber');
const { read } = require('fs');

// TODO: is this the best way to allow insecure ssl?
// TODO: and do we want to?

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

When('we request a list of processes from the api', async function () {
  this.whatIHeard = await fetch('https://localhost/processes');
})

Then('we receive {int} processes', async function (expectedResponse) {
  const resp = this.whatIHeard;
  assert.equal(resp.status, 200);
  
  const workflowData = await resp.json();
  var componentFieldNames;
  assert.equal(workflowData.length, expectedResponse)

  readYaml('../api/swagger.yaml', function(err, data){
    let apiSpec = JSON.parse(JSON.stringify(data))
    let componentRef = apiSpec.paths["/processes"].get.responses["200"].content["application/json"].schema.items["$ref"].split('/')[3]
    let componentFields = apiSpec.components.schemas[componentRef].properties
    
    componentFieldNames = Object.keys(componentFields)

    let sampleObject = workflowData.find(e => e.id != null)
    let sampleObjectFields = Object.keys(sampleObject)
    let matchedFieldsCount = 0

    //Compare workflow object against component fields
    for (let x = 0; x < componentFieldNames.length; x++){
      if (sampleObjectFields.find(e => e == componentFieldNames[x]) != null)
        matchedFieldsCount += 1
    }

    console.log('Test 1. Matched fields = ' + matchedFieldsCount + ' out of ' + componentFieldNames.length)
    
    assert.equal(matchedFieldsCount, componentFieldNames.length);
  })
});

When('we request a list of instances from the api', async function () {
  this.whatIHeard = await fetch('https://localhost/instances');
})

Then('we receive status code {int} for the instances', async function (expectedResponse) {
  const resp = this.whatIHeard;
  assert.equal(resp.status, 200);

  const instanceData = await resp.json();

  readYaml('../api/swagger.yaml', function(err, data){
    let apiSpec = JSON.parse(JSON.stringify(data))
    let componentFields = apiSpec.paths["/instances/"].get.responses["200"].content["application/json"].schema.items.properties
    let componentFieldNames  = Object.keys(componentFields)
    let sampleInstance = instanceData.find(e => e.id != null)
    let instanceFieldNames = Object.keys(sampleInstance)

    let matchedFieldsCount = 0

    for (let x = 0; x < componentFieldNames.length; x++){
      if (instanceFieldNames.find(e => e == componentFieldNames[x]) != null)
        matchedFieldsCount += 1
    }

    console.log('Test 2. Matched fields = ' + matchedFieldsCount + ' out of ' + componentFieldNames.length)
    
    assert.equal(matchedFieldsCount, componentFieldNames.length)
  })

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

  const processData = await resp.json();
  var componentFieldNames;

  readYaml('../api/swagger.yaml', function(err, data){
    let apiSpec = JSON.parse(JSON.stringify(data))
    let componentRef = apiSpec.paths["/processes"].get.responses["200"].content["application/json"].schema.items["$ref"].split('/')[3]
    let componentFields = apiSpec.components.schemas[componentRef].properties
    
    componentFieldNames = Object.keys(componentFields)

    let sampleProcess = processData
    let sampleProcessFields = Object.keys(sampleProcess)
    let matchedFieldsCount = 0

    //Compare workflow object against component fields
    for (let x = 0; x < componentFieldNames.length; x++){
      if (sampleProcessFields.find(e => e == componentFieldNames[x]) != null)
        matchedFieldsCount += 1
    }

    console.log('Test 3. Matched fields = ' + matchedFieldsCount + ' out of ' + componentFieldNames.length)
    
    assert.equal(matchedFieldsCount, componentFieldNames.length)
  })

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

  const instanceData = await resp.json();

  readYaml('../api/swagger.yaml', function(err, data){
    let apiSpec = JSON.parse(JSON.stringify(data))
    let componentFields = apiSpec.paths["/instances/"].get.responses["200"].content["application/json"].schema.items.properties
    let componentFieldNames  = Object.keys(componentFields)
    let sampleInstance = instanceData
    let instanceFieldNames = Object.keys(sampleInstance)

    let matchedFieldsCount = 0

    for (let x = 0; x < componentFieldNames.length; x++){
      if (instanceFieldNames.find(e => e == componentFieldNames[x]) != null)
        matchedFieldsCount += 1
    }
  
    console.log('Test 4. Matched fields = ' + matchedFieldsCount + ' out of ' + componentFieldNames.length)
    
    assert.equal(matchedFieldsCount, componentFieldNames.length)
  })

});

When('We request to start a workflow process from the api', async function () {
  let payload = JSON.stringify({"name": "Test"})
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
  const processStart = await resp.json()

  console.log('Process Start result: ' + JSON.stringify(processStart))
  assert.equal(resp.status, expectedResponse);

  readYaml('../api/swagger.yaml', function(err, data){
    let apiSpec = JSON.parse(JSON.stringify(data))
    let componentFields = apiSpec.paths["/processes/{processId}/start"].post.responses["202"].content["application/json"].schema.properties
    let componentFieldNames  = Object.keys(componentFields)
    let processStartData = processStart
    let processStartFieldNames = Object.keys(processStartData)

    let matchedFieldsCount = 0

    for (let x = 0; x < componentFieldNames.length; x++){
      if (processStartFieldNames.find(e => e == componentFieldNames[x]) != null)
        matchedFieldsCount += 1
    }
 
    console.log('Test 5. Matched fields = ' + matchedFieldsCount + ' out of ' + componentFieldNames.length)
    
    assert.equal(matchedFieldsCount, componentFieldNames.length)
  })
});

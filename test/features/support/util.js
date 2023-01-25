const readYamlFile = require('read-yaml-file')


async function fetchWorkflowSpec(){
    let yamlData;
    await readYamlFile('../test/features/support/swagger.yaml').then(data => {
        yamlData = data
    });
    console.log(yamlData)
    return yamlData
}

exports.FetchOpenApiSpec = fetchWorkflowSpec
# 7 Data Structures

## Resource Model

The full resource model is described in detail in the [SwaggerHub API Specification](https://app.swaggerhub.com/apis/GovStack/Workflow-BB/1.0.0), but the following is a high-level diagram of the key entities.

![ERD](../diagrams/data-structures.png)

[https://github.com/OpenFn/govstack-workflow-bb/blob/main/erd.drawio](https://github.com/OpenFn/govstack-workflow-bb/blob/main/erd.drawio)

## Standards

The following standards are applicable to data structures in the Workflow Building Block:

1. [BPMN v2.0.2 - Business Process Model and Notation](https://www.omg.org/spec/BPMN/)&#x20;
2. [OpenAPI](https://github.com/OAI/OpenAPI-Specification/blob/3.0.2/versions/3.0.2.md)
3. REST APIs
   1. JSON
   2. YAML
   3. _(Note that we’re saying “no” to XML!)_

## Data Elements

The data elements listed below provide detail for the resource model defined above. This section lists the required fields for each resource. The data elements listed are extensible in order to respond to specific use cases, however, the data elements listed below are a minimum requirement.

| Data Element             | Description                                                                                                                                                                                                                    |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Process Definition       | Reference to a blueprint of a process. Contains all the fields required to create a new process for a workflow engine                                                                                                          |
| Process                  | Represents a process that has been successfully created in a Workflow engine. This object contains important reference details like the generated process uuid, which is required to perform further operations on the process |
| Process Instance Payload | Initiates a process execution or creates a process instance. Contains the ability to capture input values that may be required to start a new process instance                                                                 |
| Process Instance         | Used to list a single or list of process instances that are in various states like active, suspended or stopped, in a Workflow engine                                                                                          |

For reference, all data elements are described in detail in the [SwaggerHub API Specification](../api/swagger.yaml).

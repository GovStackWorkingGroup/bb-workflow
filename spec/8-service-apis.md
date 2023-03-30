---
description: >-
  This section provides a reference for APIs that should be implemented by this
  Building Block.
---

# 8 Service APIs

This section provides a reference for APIs that should be implemented by this Building Block. The APIs defined here establish a blueprint for how the Building Block will interact with other Building Blocks. Additional APIs may be implemented by the Building Block, but the listed APIs define a minimal set of functionality that should be provided by any implementation of this Building Block.&#x20;

The [GovStack non-functional requirements document](https://govstack.gitbook.io/specification/architecture-and-nonfunctional-requirements/6-onboarding) provides additional information on how 'adaptors' may be used to translate an existing API to the patterns described here.



All APIs will be defined using the OpenAPI (Swagger) standard. The API definitions will be hosted outside of this document. This section may provide a brief description of the required APIs. This section will primarily contain links to the GitHub repository for OpenAPI definition (YAML) files as well as to a website hosted by GovStack that provides a live API documentation portal.

### v1 API

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-workflow/main/api/swagger.yaml" path="/processes" method="get" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-workflow/main/api/swagger.yaml](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-workflow/main/api/swagger.yaml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-workflow/main/api/swagger.yaml" path="/processes/{processId}" method="get" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-workflow/main/api/swagger.yaml](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-workflow/main/api/swagger.yaml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-workflow/main/api/swagger.yaml" path="/processes/{processId}/start" method="post" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-workflow/main/api/swagger.yaml](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-workflow/main/api/swagger.yaml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-workflow/main/api/swagger.yaml" path="/instances/" method="get" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-workflow/main/api/swagger.yaml](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-workflow/main/api/swagger.yaml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-workflow/main/api/swagger.yaml" path="/instances/{instanceId}" method="get" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-workflow/main/api/swagger.yaml](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-workflow/main/api/swagger.yaml)
{% endswagger %}

1. **List processes.** (GET) **/processes**
   * Retrieves the list of workflow processes deployed on the workflow engine.
   * Provides for each process the information: definition ID, version, status (active/suspended).
2. **Get individual process definition.** (GET) **/processes/{processId}**
3. **Instantiate a process instance.** (POST) **/processes/{processId}/start**
   * Instantiates a given process definition Id. Responds with instance Universal Unique Identifier.
   * Process variables (just a PAYLOAD object - process, should be able to extract from the payload JSON object attributes) may be supplied in the request body.
   * If the start event has mandatory variables, the workflow engine will perform backend validation.
4. **List process instances.** (GET) **/instances**
   * Retrieves the list of running process instances for a given workflow process definition ID.
   * Get Instances workflow process by ID (GET) /instances?processId=123
5. **Get the status of an existing process instance by instance ID.** (GET) **/instances/{instanceId}**
   * Retrieves the status of a single process instance given an instance ID.

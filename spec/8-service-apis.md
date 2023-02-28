# 8 Service APIs

This section describes external APIs that must be implemented by the building block. Additional APIs may be implemented by the building block (all APIs must adhere to the standards and protocols defined), but the listed APIs define a minimal set that must be provided by any implementation.

All APIs will be defined using the OpenAPI (Swagger) standard. The API definitions will be hosted outside of this document. This section may provide a brief description of required APIs. This section will primarily contain links to the GitHub repository for OpenAPI definition (yaml) files as well as to a website hosted by GovStack that provides a live API documentation portal.

### v1 API

The full v1 API is available at [https://app.swaggerhub.com/apis/GovStack/Workflow-BB/1.0.0](https://app.swaggerhub.com/apis/GovStack/Workflow-BB/1.0.0).

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-workflow/main/api/swagger.yaml" path="/processes" method="get" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-workflow/main/api/swagger.yaml](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-workflow/main/api/swagger.yaml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-workflow/main/api/swagger.yaml" path="/processes" method="post" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-workflow/main/api/swagger.yaml](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-workflow/main/api/swagger.yaml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-workflow/main/api/swagger.yaml" path="/processes/{processId}" method="get" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-workflow/main/api/swagger.yaml](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-workflow/main/api/swagger.yaml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-workflow/main/api/swagger.yaml" path="/processes/{processId}" method="put" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-workflow/main/api/swagger.yaml](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-workflow/main/api/swagger.yaml)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-workflow/main/api/swagger.yaml" path="/processes/{processId}" method="delete" %}
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

#### Status Updates Concept to Consider

1.  Currently, we let business process designers determine who to update at which point in the process, including at the end if they so desire. _(This is the expected default.)_

    ```
    We COULD require that Workflow BBs expect/or respond to an additional parameter/payload attribute in the /process/id/start endpoint which contains a “notification URL” to be notified with a standard payload upon completion of each step and/or completion of the entire process.


    We WOULD then require the BB to send these webhook notifications to the initial callers “notification URL” if it was provided in the initial /process/id/start request.
    ```
2. Also, currently, because the UUID of a newly created instance is provided in the response to the initial caller, that caller can check API endpoint #5 (see above) whenever they want. In other words, they can “poll” for status updates. _(This is another default flavor available, out of the box.)_

### vX Api (for future consideration)

In future we should specify which roles can access which endpoints.

1. \*\*Suspend a workflow process Definition By Id \*\*(POST)
   * Suspend a given process definition by id
2. \*\*Activate a workflow process Definition By Id \*\*(POST)
   * ·Activate a given process definition by id
3. **Suspend a workflow instance by instance ID.** (POST)
   * Suspend a running workflow instance given an instance ID.
4. **Delete a workflow instance by instance ID.** (DELETE)
   * Deletes a running workflow instance given an instance ID
5. **Get the list of tasks for a workflow instance by instance ID. (GET)**
   * Retrieves the information of all tasks for a process instance given an instance ID
6. **Get the next task for a workflow instance by instance ID. (GET)**
   * Retrieves the information of next task according to the status of the process instance given an instance ID
7. **Complete task** (POST)
   * Provides for a given task the required variables for completion
8. **Get process instance statistics a workflow instance by instance ID(GET)**
   * Retrieves runtime statistics of the process engine of running process instances.
9. **Deploy a new workflow process (POST)**
   * \*\*Creates a new workflow process and specifies the detail of its configuration \*\*
10. Redeploy \*\* workflow process (POSTT)\*\*
    * Re-deploy an existing deployment to modify the workflow process.
11. **Delete a specific Deployment (DELETE)**
    * Deletes a specific workflow process.
    * Optionally all process instances, historic process instances and jobs for this deployment should be deleted.

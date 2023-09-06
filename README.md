# GovStack Workflow Building Block [![CircleCI](https://dl.circleci.com/status-badge/img/gh/GovStackWorkingGroup/bb-workflow/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/GovStackWorkingGroup/bb-workflow/tree/main)

This repository contains technical specifications for the GovStack Workflow BB.

The spec is provided in human-readable format via
[GitBook](https://app.gitbook.com/o/pxmRWOPoaU8fUAbbcrus/s/zdXe8NbIMZIv5sydPBf6/).

## Roadmap

### API Roadmap

#### Status Updates Concept to Consider

1.  Currently, we let business process designers determine who to update at
    which point in the process, including at the end if they so desire. _(This
    is the expected default.)_

        We COULD require that Workflow BBs expect/or respond to an additional parameter/payload attribute in the /process/id/start endpoint which contains a “notification URL” to be notified with a standard payload upon completion of each step and/or completion of the entire process.


        We WOULD then require the BB to send these webhook notifications to the initial callers “notification URL” if it was provided in the initial /process/id/start request.

2.  Also, currently, because the UUID of a newly created instance is provided in
    the response to the initial caller, that caller can check API endpoint #5
    (see above) whenever they want. In other words, they can “poll” for status
    updates. _(This is another default flavor available, out of the box.)_

#### New endpoints for future consideration

In future we should specify which roles can access which endpoints.

6. **Suspend a workflow process Definition By Id **(POST)
   - Suspend a given process definition by id
7. **Activate a workflow process Definition By Id **(POST)
   - ·Activate a given process definition by id
8. **Suspend a workflow instance by instance ID.** (POST)
   - Suspend a running workflow instance given an instance ID.
9. **Delete a workflow instance by instance ID.** (DELETE)
   - Deletes a running workflow instance given an instance ID
10. **Get the list of tasks for a workflow instance by instance ID. (GET)**
    - Retrieves the information of all tasks for a process instance given an
      instance ID
11. **Get the next task for a workflow instance by instance ID. (GET)**

    - Retrieves the information of next task according to the status of the
      process instance given an instance ID

12. **Complete task** (POST)

    - Provides for a given task the required variables for completion

13. **Get process instance statistics a workflow instance by instance ID(GET)**
    - Retrieves runtime statistics of the process engine of running process
      instances.
14. **Deploy a new workflow process (POST)**
    - **Creates a new workflow process and specifies the detail of its
      configuration **
15. Redeploy ** workflow process (POSTT)**
    - Re-deploy an existing deployment to modify the workflow process.
16. **Delete a specific Deployment (DELETE)**
    - Deletes a specific workflow process.
    - Optionally all process instances, historic process instances and jobs for
      this deployment should be deleted.

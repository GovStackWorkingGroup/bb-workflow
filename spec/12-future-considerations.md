# (12) Future Considerations

1. Auto-sandboxing/testing/simulation
    - Camunda simulation tool?
    - OpenFn `fakeAdaptor.js`?
2. IAM handles the provisioning of “admin users” (humans) that log into the Workflow Engine BB dashboard to build, run, and audit/monitor processes and process instances.
   - Who handles the creation of “credentials” (often, machine-only/API-only access tokens or api tokens that allow a process to access a secure system during runtime)?
     - Taylor says it’s not a problem. If a user must be created to access the MoH patient registry, that user must be created via IAM. Once it’s created, there will be a username and password.
     - The username and password may be saved in lastpass, in notebook, or stored as a credential in a workflow engine.

# vX Api (for future consideration)

In future we should specify which roles can access which endpoints.
1. Suspend a workflow process Definition By Id (POST)
   - suspend a given process definition by id
2. Activate a workflow process Definition By Id (POST)
   - Activate a given process definition by id
3. Suspend a workflow instance by instance ID. (POST)
   - Suspend a running workflow instance given an instance ID.
4. Delete a workflow instance by instance ID. (DELETE)
   - Deletes a running workflow instance given an instance ID
5. Get the list of tasks for a workflow instance by instance ID. (GET)
   - Retrieves the information of all tasks for a process instance given an instance ID
 6. Get the next task for a workflow instance by instance ID. (GET)
   - Retrieves the information of next task according to the status of the process instance given an instance ID
 7. Complete task (POST)

# Standards Future Support

1. CMMN - Case Management Model and Notation (https://www.omg.org/cmmn/)
2. DMN - Decision modeling notation (https://www.omg.org/spec/DMN)

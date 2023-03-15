# (12) Future Considerations

1. Auto-sandboxing/testing/simulation

   - Camunda simulation tool?
   - OpenFn `fakeAdaptor.js`?

2. IAM handles the provisioning of “admin users” (humans) that log into the
   Workflow Engine Building Block dashboard to build, run, and audit/monitor
   processes and process instances.&#x20;

3. Who handles the creation of “credentials” (often, machine-only/API-only
   access tokens or api tokens that allow a process to access a secure system
   during runtime)?

   - Taylor says it’s not a problem. If a user must be created to access the MoH
     patient registry, that user must be created via IAM. Once it’s created,
     there will be a username and password.
   - The username and password may be saved in lastpass, in my notebook, or
     stored as a credential in a workflow engine.

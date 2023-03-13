# 11 Key Decision Log

In this section we memorialize key decisions.

1. 2021-10-22: We decided to add a key decision log to capture the reasons behind key decisions made for future team members.
2. 2021-11-17: We will use BPMN standard terminology, but we will not use tool-specific terminology to ensure that lots of workflow tools may satisfy this specification.
3. Each service may adopt one or more processes and subprocesses in a hierarchical tree, where each process may have a generic name by Govstack, suitable to maintain a library of processes.
4. The same processes may be called by different names based on local practices of a given jurisdiction (state/country). 2. User A knows that Limpopo Province MoH has a workflow engine with lots of cool processes. 3. User A browses existing processes provided by Limpopo Province MoH’s “workflow engine X” 4. User A clicks the “clone ‘new birth registration process’ button” and is prompted to _SAVE AS_ “new Mpumalanga MoH birth process” in their Mpumalanga Camunda Cloud implementation. (Or whatever.) 5. User B does the same thing and clones it into their Free State MoH OpenFn deployment, saving it as “FS MoH Birth v3.0”.
5. To have generic names for different processes (GovStack defined), and also allow alias names for processes at various levels of a hierarchy(defined by govt).
6. To adopt a convention for process “types” or generic names, but users may name the processes they define in their Workflow implementation however they would like. We may ask that they adhere to a naming convention, but this does not belong in the Building Block specification.
7.
   * Move to a single OpenAPI specification.
   * How we think about “adaptors” - if there is an “Adaptor Building Block”, any technology that implements this BB must facilitate: 7. Data format transformation 1. E.G.: Replacing keys in a JSON object, etc. 8. Data exchange protocol transformation 2. E.G.: An origin system requests to register a patient with _**POST-A**_ but the destination system requires that we instead make _**GET-A1**_ and then _**POST-A2**_ to complete the request. 9. Calling external transformers 3. E.G.: Some data format transformation is required, but it is provided by an external API so we simply call that external API instead of managing the data formation transformation ourselves. (Consider HL7 FHIR.)
8. Dropped “Complex Gateway” as it’s not recommended for use in Camunda or many other BPMN-based workflow applications. Everything we want in the use cases can be achieved with the currently described (4 other) gateway types.

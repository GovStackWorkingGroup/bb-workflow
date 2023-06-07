---
description: >-
  Key Digital Functionalities describe the core (required) functions that this
  Building Block must be able to perform.
---

# 4 Key Digital Functionalities

The Workflow Building Block enables the creation and automatic execution of
business processes. Any application that is used to implement the Workflow
Building Block must:

1. Allow business users to define and create arbitrary workflow processes:
   - that can be instantiated via API, manual interaction, or via the passage of
     time;
   - that can perform calculations, make API requests (e.g. Hypertext Transfer
     Protocol Secure, HTTPS) make HTTP requests, and execute scripts.
2. Allow business users to monitor the status of process instances.
3. Allow other applications to discover existing processes via API.

If a candidate application/implementation does these things, it may make for a
suitable Workflow Building Block implementation.

## Out of Scope

1. Workflow will not need to provide RPA (Robotic Process Automation)
   capabilities. This means automated control of graphical user interfaces (UI),
   if required within a Building Block, will be handled by a third-party RPA
   tool which can be integrated into the Workflow Building Block for
   orchestration.
2. Workflow is not always responsible for data flow or information mediation. It
   only performs limited data management within the context of a
   parent-predefined workflow process. There are many cases where a building
   block application will make a request to another GovStack service (via the
   information mediator) or to an external service (via an API gateway, for
   example) which does not involve workflow at all.
3. While the WFbb does provide process scheduling capabilities, it is not always
   responsible for scheduling the execution of processes. For example, a process
   may be instantiated at a particular time by another application independently
   determining when to send that “start process” API call to the Workflow
   engine. In this case, Workflow is not responsible for scheduling but merely
   executes the process when told to by another application.

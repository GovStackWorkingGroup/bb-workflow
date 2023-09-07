---
description: >-
  Key Digital Functionalities describe the core (required) functions that this
  Building Block must be able to perform.
---

# 4 Key Digital Functionalities

The Workflow Building Block enables the creation and automatic execution of
business processes. Any application used to implement the Workflow Building
Block specification must provide the following Key Digital Functionalities.

## 4.1 Workflow Process Building

Workflow Building Block candidates must allow business users to create arbitrary
workflow processes. These processes must be able to perform calculations, make
API requests (e.g. Hypertext Transfer Protocol Secure, HTTPS) make HTTP
requests, and execute scripts.

## 4.2 Workflow Process Execution

Workflow Building Block candidates (to differentiate themselves from mere
business-process modelling tools) must be able to execute workflow processes:

1. via web API,
2. via manual interaction (click to run),
3. or via the passage of time.

## 4.3 Status Monitoring

Workflow Building Block candidates must allow business users to monitor the
status of process instances.

## 4.4 Programmatic Process Discovery

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
4. Parallel processing of workflow process instances is an optional useful
   feature to support scaling requirements for production deployments. WFbb is
   not prescriptive on technologies and/or patterns that may be employed to
   support such capabilities, which may include, for example, multi-threading,
   service workers and/or message queues e.t.c
5. While workflow process start and stop capabilities have been listed as key
   digital functionalities, WFbb is not prescriptive on possible transcation
   management processes (e.g durability, rollbacks), state management, memory
   object clean-ups, garbage collection, alerts and/or general data management
   routines that should be considered to facilitate safe, reliable and
   predictable stoppage of workflow processes. Workflow Building Block
   candidates must provide an API which allows another application or developer
   to find a list of all available workflow processes for a given project or
   workspace.

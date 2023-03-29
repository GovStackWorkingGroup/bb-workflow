---
description: >-
  This section describes standard internal workflows that a building block
  should support. Each internal workflow must be linked to one of the Functional
  Requirements defined in section 6.
---

# 9 Internal Workflows

There are no _required_ internal workflows for candidate applications that
implement the workflow BB specification. Below is an example of how an internal
workflow might run when responding to an API request.

## 9.1 Start a workflow process via API

To satisfy functional requirements 10, 11, and 12, a candidate application may
implement the following internal workflow.

```mermaid
sequenceDiagram
autonumber
    participant E as External Application
    participant W as Workflow Application
    E->>W: Call to start WF process with input data
    W-->W: Create initial state for process instance with request body
    W-->W: Add process instance to queue
    W->>E: Respond with 202 and process instance ID
```

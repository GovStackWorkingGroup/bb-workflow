---
description: >-
  This section provides a detailed view of how this Building Block will interact
  with other Building Blocks to support common use cases.
---

# 9 Internal Workflows

There are no required internal workflows for candidate applications that implement the Workflow Building Block specification. Below is an example of how an internal workflow might run when responding to an API request.

## 9.1 Start a workflow process via API

To satisfy functional requirements 10, 11, and 12, a candidate application may implement the following internal workflow.

```mermaid
sequenceDiagram
autonumber
    participant E as External Application
    participant W as Workflow Application
    participant Q as Workflow Engine Queue
    participant X as Workflow Engine Executor
    E->>W: Call to start WF process with input data
    W->>W: Create initial state for process instance with request body
    W->>Q: Add process instance to queue
    W->>E: Respond with 202 and process instance ID
    X->>Q: Get process instance request from top of queue
    X->>X: Execute workflow process instance
    X->>W: Send results back to app
```

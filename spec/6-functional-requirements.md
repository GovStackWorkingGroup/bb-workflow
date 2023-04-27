---
description:
  This section lists the technical capabilities of this Building Block.
---

# 6 Functional Requirements

## In Scope

## 6.1 Workflow Process Building

1. **MUST** allow the design of business processes via User Interface, i.e.
   support creation of diagrams as it is depicted in the
   [Business Process Model and Notation (BPMN) specification v.2.0](https://www.omg.org/spec/BPMN/2.0/PDF)
   in section 7.3 (“BPMN Diagram Types”) with subsequent possibility to generate
   from diagrams XML and/or JSON version of process definition.
2. **MUST** allow users to define/execute processes using BPMN v.2.0
   specification basic categories of elements such as Flow Objects, Data,
   Connecting Objects, Swimlanes, and Artifacts.
3. **SHOULD** allow users to define/execute processes using BPMN v.2.0
   specification Extended Modeling Elements as it is depicted in the
   specification section 7.2.2.
4. **SHOULD** allow 5 types of decision gateways: Exclusive Gateway, Event-Based
   Gateway, Inclusive Gateway, and Parallel Gateway.
5. **MUST** allow the configuration and execution of an arbitrary
   block/script/program/component during a business process.
6. **MUST** facilitate the development of an arbitrary script (to be used for
   things like message translation).
7. **MUST** allow “embedded sub-processes” which depend completely on the parent
   process and are not reusable; however, all process data used in the parent
   process is directly accessible by the embedded sub-process.
8. **MUST** allow “reusable sub-processes” which do not depend on the parent
   process; they are typically modeled or designed separately so that they may
   be used in multiple contexts; this type does not necessarily have access to
   the parent's data by default; explicit mapping of attributes is often
   required to achieve data sharing between parent and sub-process.

## 6.2 Workflow Process Execution

9. **MUST** be able to execute a business process.
10. **SHOULD** be able to execute a process when given a valid BPMN-compliant
    workflow specification.
11. **MUST** allow the initiation of an asynchronous business process via API
    and respond with an appropriate HTTP response code, e.g., 202/Accepted.
12. **MUST** allow the initial “state” (or beginning data) to be sent along with
    the request to initiate a process via API.
13. **MUST** respond with a unique instance id when process instance is
    instantiated via API.
14. **MUST** allow the initiation of a synchronous business process via API.
15. **MUST** allow the definition of a cron/time-based workflow trigger via a
    user interface.
16. **MUST** allow the execution of a workflow process based on cron/timer.
17. **MUST** allow the definition of a “flow-trigger” which can instantiate a
    process based on at least “successful completion” or “failure of/exception
    in” an earlier process.
18. **MUST** allow the execution of a workflow process based on a “flow
    trigger”.
19. **SHOULD** allow integration with messaging channels.
20. **MUST** support sending messages between different organizations.
21. **MUST** support sending messages within one organization between different
    organizational units.

## 6.3 Status Monitoring

22. **MUST** allow an administrator to view and manage all workflow processes
    (both active and inactive) from their interface.
23. **MUST** provide a monitoring dashboard that allows an administrator user to
    view the existing processes and instances, the status of all instances, and
    the health of the system generally.

## 6.4 Programmatic Process Discovery

24. **MUST** allow an administrator to “enable” or “disable” specific processes
    which will then appear in the BB API spec: “/api/process” LIST for
    discovery.

## 6.5 Other Functionality

25. **MUST** have an OpenIAM-compatible API for user/privilege provisioning.

### Internal Function Blocks

The following are the internal key functionalities/capabilities that orchestrate
the functionality of the implementation of the Workflow Building Block:

![alt_text](../diagrams/image6.png)

**Flow Repository** is the place where flow definitions are stored. This
repository can be linked to related components, like that validate/parse flow
definitions comply with open standards like Business Process Model and Notation.
The repository is a general term that refers to the storage place of
flow-related components of a flow definition including tasks, processes,
decision gateways, etc.

**Metadata Store** refers to the storage of data that an Execution Engine needs
to associate with a defined workflow to facilitate successful execution. This
data includes but is not limited to input variables, constants, mathematical
and/or logical functions, data objects, or any important data that gives context
to a given workflow.

**Trigger Manager** facilitates the bootstrapping or initiates the instantiation
of a workflow for execution by the Execution Engine. This component should be
aware of different ways that a workflow can be triggered, e.g. through an API
call, a timer, etc.

**Execution Engine** is responsible for running/executing a workflow and
providing the results of the run. This component may at the very minimum execute
valid atomic logical expressions defined in each workflow task or in an advanced
scenario may be linked to intelligent machine learning-related capabilities that
may provide recommendations or suggestions for improving workflow design.

**Timer** is responsible for the scheduling and initiation of time-based
workflows. This component may also be responsible for the monitoring of
execution time of given workflows and handling of time-out scenarios for
workflows that may exceed the set maximum execution time.

**Workflow Designer** is a graphical user interface or editor that may be used
by Process Designers to build workflows and have them saved in the Flow
Repository. This interface must be intuitive, easy to use, and able to
facilitate common CRUD-like functionality which includes: creating new
workflows, listing saved workflows, updating existing workflows, and deletion of
workflows. The designer may also facilitate imports of workflows from external
sources, supporting open formats like Business Process Model and Notation.

**Web API** is an important component that should be designed to manage all
interoperability requirements for the Workflow Building Block. This API layer
should facilitate the remote initiation of workflow processes from external
systems and also the exposure of workflow-related data (design time and
execution time) to facilitate reporting by external systems when needed.

**Batch Queue Manager** is responsible for the queuing and batch processing of
workflows. It is assumed that at any given time, multiple workflows may be
active and may be in execution mode. Hence a queue manager that may have
multi-threading capabilities may support the execution of a large number of
workflow processes or tasks in real-time yet providing the required execution
isolation to ensure the integrity of each workflow.

---
description: This section lists the technical capabilities of this Building Block.
---

# 6 Functional Requirements

The following Functional Requirements are grouped by the Key Digital Functionality that they support.

## 6.1 Workflow Process Building

* Must allow the design of business processes via User Interface, i.e. support creation of diagrams as it is depicted in the [Business Process Model and Notation (BPMN) specification v.2.0](https://www.omg.org/spec/BPMN/2.0/PDF) in section 7.3 (“BPMN Diagram Types”) with the subsequent possibility to generate from diagrams XML and/or JSON version of process definition (REQUIRED)
* Must allow users to define/execute processes using BPMN v.2.0 specification basic categories of elements such as Flow Objects, Data, Connecting Objects, Swimlanes, and Artifacts (REQUIRED)
* Should allow users to define/execute processes using BPMN v.2.0 specification Extended Modeling Elements as it is depicted in the specification section 7.2.2 (RECOMMENDED)
* Should allow 5 types of decision gateways: Exclusive Gateway, Event-Based Gateway, Inclusive Gateway, and Parallel Gateway (RECOMMENDED)
* Must allow the configuration and execution of an arbitrary block/script/program/component during a business process (REQUIRED)
* Must allow facilitating the development of an arbitrary script (to be used for things like message translation) (REQUIRED)
* Must allow “embedded sub-processes” which depend completely on the parent process and are not reusable; however, all process data used in the parent process is directly accessible by the embedded sub-process (REQUIRED)
* Must allow “reusable sub-processes” which do not depend on the parent process; they are typically modeled or designed separately so that they may be used in multiple contexts; this type does not necessarily have access to the parent's data by default; explicit mapping of attributes is often required to achieve data sharing between parent and sub-process (REQUIRED)

## 6.2 Workflow Process Execution

* Must be able to execute a business process (REQUIRED)
* Should be able to execute a process when given a valid BPMN-compliant workflow specification (RECOMMENDED)
* Must allow the initiation of an asynchronous business process via API and respond with an appropriate HTTP response code, e.g., 202/Accepted (REQUIRED)
* Must allow the initial “state” (or beginning data) to be sent along with the request to initiate a process via API (REQUIRED)
* Must respond with a unique instance id when a process instance is instantiated via API (REQUIRED)
* Must allow the initiation of a synchronous business process via API (REQUIRED)
* Must allow the definition of a cron/time-based workflow trigger via a user interface (REQUIRED)
* Must allow the execution of a workflow process based on cron/timer (REQUIRED)
* Must allow the definition of a “flow-trigger” which can instantiate a process based on at least “successful completion” or “failure of/exception in” an earlier process (REQUIRED)
* Must allow the execution of a workflow process based on a “flow trigger” (REQUIRED)
* Should allow integration with messaging channels (RECOMMENDED)
* Must support sending messages between different organizations (REQUIRED)
* Must support sending messages within one organization between different organizational units (REQUIRED)

## 6.3 Status Monitoring

* Must allow an administrator to view and manage all workflow processes (both active and inactive) from their interface (REQUIRED)
* Must provide a monitoring dashboard that allows an administrator user to view the existing processes and instances, the status of all instances, and the health of the system generally (REQUIRED)

## 6.4 Programmatic Process Discovery

* Must allow an administrator to “enable” or “disable” specific processes which will then appear in the BB API spec: “/api/process” LIST for discovery (REQUIRED)

## 6.5 Other Functionality

* Must have an OpenIAM-compatible API for user/privilege provisioning (REQUIRED)

### Internal Function Blocks

The following are the internal key functionalities/capabilities that orchestrate the functionality of the implementation of the Workflow Building Block:

![Blocks containing internal key functionalities of the Workflow Building Block](../diagrams/image6.png)

**Flow Repository** is the place where flow definitions are stored. This repository can be linked to related components, like that validate/parse flow definitions comply with open standards like Business Process Model and Notation. The repository is a general term that refers to the storage place of flow-related components of a flow definition including tasks, processes, decision gateways, etc.

**Metadata Store** refers to the storage of data that an Execution Engine needs to associate with a defined workflow to facilitate successful execution. This data includes but is not limited to input variables, constants, mathematical and/or logical functions, data objects, or any important data that gives context to a given workflow.

**Trigger Manager** facilitates the bootstrapping or initiates the instantiation of a workflow for execution by the Execution Engine. This component should be aware of different ways that a workflow can be triggered, e.g. through an API call, a timer, etc.

**Execution Engine** is responsible for running/executing a workflow and providing the results of the run. This component may at the very minimum execute valid atomic logical expressions defined in each workflow task or in an advanced scenario may be linked to intelligent machine learning-related capabilities that may provide recommendations or suggestions for improving workflow design.

**Timer** is responsible for the scheduling and initiation of time-based workflows. This component may also be responsible for the monitoring of execution time of given workflows and handling of time-out scenarios for workflows that may exceed the set maximum execution time.

**Workflow Designer** is a graphical user interface or editor that may be used by Process Designers to build workflows and have them saved in the Flow Repository. This interface must be intuitive, easy to use, and able to facilitate common CRUD-like functionality which includes: creating new workflows, listing saved workflows, updating existing workflows, and deletion of workflows. The designer may also facilitate imports of workflows from external sources, supporting open formats like Business Process Model and Notation.

**Web API** is an important component that should be designed to manage all interoperability requirements for the Workflow Building Block. This API layer should facilitate the remote initiation of workflow processes from external systems and also the exposure of workflow-related data (design time and execution time) to facilitate reporting by external systems when needed.

**Batch Queue Manager** is responsible for the queuing and batch processing of workflows. It is assumed that at any given time, multiple workflows may be active and may be in execution mode. Hence a queue manager that may have multi-threading capabilities may support the execution of a large number of workflow processes or tasks in real-time yet providing the required execution isolation to ensure the integrity of each workflow.

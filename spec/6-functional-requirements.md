# (6) Functional Requirements

## In Scope

1. **MUST** allow the design of business processes via UI, i.e. support creation
   of diagrams as it is depicted in the
   [BPMN specification v.2.0](https://www.omg.org/spec/BPMN/2.0/PDF) in the
   section 7.3 (“BPMN Diagram Types”) with subsequent possibility to generate
   from diagrams XML and/or JSON version of process definition
2. **MUST** be able to execute that BPMN process given a valid BPMN-compliant
   workflow specification
3. **MUST** allow users to define/execute processes using BPMN v.2.0
   specification basic categories of elements such as Flow Objects, Data,
   Connecting Objects, Swimlanes and Artifacts
4. **SHOULD** allow users to define/execute processes using BPMN v.2.0
   specification Extended Modeling Elements as it is depicted in the
   specification section 7.2.2
5. **SHOULD** allow 5 types of decision gateways: Exclusive Gateway, Event-Based
   Gateway, Inclusive Gateway, Parallel Gateway
6. **MUST** allow the configuration and execution of an arbitrary
   block/script/program/component during a business process
7. **MUST** facilitate the development of an arbitrary script (to be used for
   things like message translation)
8. **MUST** allow “embedded sub-processes” which depend completely on the parent
   process and are not reusable; however all process data used in the parent
   process is directly accessible by the embedded sub-process
9. **MUST** allow “reusable sub-processes” which do not depend on the parent
   process; they are typically modeled or designed separately so that they may
   be used in multiple contexts; this type does not necessarily have access to
   the parent's data by default; explicit mapping of attributes is often
   required to achieve data sharing between parent and sub-process
10. **MUST** allow the initiation of an asynchronous business process via API
    and respond with an appropriate HTTP response code, e.g., 202/Accepted
11. **MUST** allow the initial “state” (or beginning data) to be sent along with
    the request to initiate a process via API
12. **MUST** respond with a unique instance id when process instance is
    instantiated via API
13. **MUST** allow the initiation of a synchronous business process via API
14. **MUST** allow the definition of a cron/time-based workflow trigger via a
    user interface
15. **MUST** allow the execution of a workflow process based on cron/timer
16. **MUST** allow the definition of a “flow-trigger” which can instantiate a
    process based on at least “successful completion” or “failure of/exception
    in” an earlier process
17. **MUST** allow the execution of a workflow process based on a “flow-trigger”
18. **SHOULD** allow integration with messaging channels
19. **MUST** support sending messages between different organizations
20. **MUST** support sending messages within one organization between different
    organizational units
21. **MUST** provide a monitoring dashboard that allows an administrator user to
    view the existing processes and instances, the status of all instances, the
    health of the system generally, &c.
22. **MUST** have an OpenIAM compatible API for user/privilege provisioning
23. **MUST** allow an administrator to “enable” or “disable” specific processes
    which will then appear in the BB API spec: “/api/process” LIST for discovery
24. **MUST** allow an administrator to view and manage all workflow processes
    (both active and inactive) from their interface

### Internal Function Blocks

The following are the internal key functionalities / capabilities that
orchestrate the functionality of the implementation of the Workflow Building
Block:

![alt_text](/diagrams/image6.png 'image_tooltip')

**Flow Repository** is the place where flow definitions are stored. This
repository can be linked to related components like that validate / parse flow
definitions comply with open standards like BPMN. The repository is general term
that refers to the storage place of flow related component of a flow definition
including tasks, processes and decision gateways e.t.c

**Metadata Store** refers to the storage of data that an Execution Engine needs
to associate with a defined workflow to facilitate successful execution. This
data includes but is not limited to : input variables, constants, mathematical
and/or logical functions, data objects or any important data that gives context
to a given workflow.

**Trigger Manager **facilitates the bootstrapping or initiates the instantiation
of a workflow for execution by the Execution Engine. This component should be
aware of different ways that a workflow can be triggered e.g through an API call
or a timer e.t.c

**Execution Engine** is responsible for running / executing a workflow and
providing the results of the run. This component may at the very minimum execute
valid atomic logical expressions defined in each workflow task or in an advanced
scenario may be linked to intelligent machine learning related capabilities that
may provide recommendations or suggestions for improving workflow design.

**Timer** is responsible for the scheduling and initiation of time-based
workflows. This component may also be responsible for the monitoring of
execution time of given workflows and handling of time-out scenarios for
workflows that may exceed set maximum execution time.

**Workflow Designer** is a graphical user interface or editor that may be used
by Process Designers to build workflows and have them saved in the** Flow
Repository**. This interface must be intuitive, easy to use and be able to
facilitate common CRUD like functionality which include : creating new
workflows, listing saved workflows, updating existing workflow and deletion of
workflows.The designer may also facilitate imports of workflows from external
sources, supporting open formats like BPMN.

**Batch Queue Manager** is responsible for the queuing and batch processing of
workflows. It is assumed that any given time, multiple workflows may be active
and may be in execution mode. Hence a queue manager that may have
multi-threading capabilities may support the execution of a large number of
workflow processes or tasks in real-times yet providing the required execution
isolation to ensure the integrity of each workflow.

**Web API** is an important component that should be designed to manage all
interoperability requirements for the Workflow Building Block. This API layer
should facilitate the remote initiation of workflow processes from external
systems and also the exposure of workflow related data (design-time and
execution time) to facilitate reporting by external systems when needed

## Out of Scope

1. Workflow will not need to provide RPA (Robotic Process Automation)
   capabilities. This means automated control of graphical user interfaces (UI),
   if required within a BBs, will be handled by a third-party RPA tool which can
   be integrated to the Workflow BB for orchestration.
2. Workflow is not _always_ responsible for data flow or information mediation.
   It only performs limited data management within the context of a parent
   predefined workflow process. There are many cases where a building block
   application will make a request to another GovStack service (via the
   information mediator) _or_ to an external service (via an API gateway, for
   example) which does _not_ involve workflow at all.
3. While the WFbb _does_ provide process scheduling capabilities, it is not
   always responsible for scheduling the execution of processes. For example, a
   process may be instantiated at a particular time by another application
   independently determining when to send that “start process” API call to the
   Workflow engine. In this case, Workflow is not responsible for scheduling,
   but merely executes the process when told to by another application.

## For Future Consideration

1. Auto-sandboxing/testing/simulation
   1. Camunda simulation tool?
   2. OpenFn `fakeAdaptor.js`?
2. IAM handles the provisioning of “admin users” (humans) that log into the
   Workflow Engine BB dashboard to build, run, and audit/monitor processes and
   process instances. 3. **Who handles the creation of “credentials” (often,
   machine-only/API-only access tokens or api tokens that allow a process to
   access a secure system during runtime)?** 1. Taylor says it’s not a problem.
   If a user must be created to access the MoH patient registry, that user must
   be created via IAM. Once it’s created, there will be a username and
   password. 2. The username and password may be saved in lastpass, in my
   notebook, or stored as a credential in a workflow engine.

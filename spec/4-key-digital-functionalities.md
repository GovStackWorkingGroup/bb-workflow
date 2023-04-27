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

## 4.1 Flow Repository

Candidate applications **must** provide a list of saved processes that can be
accessed and called for execution.

## 4.2 Metadata Store

Candidate applications should provide a way for admins to configure and access
stored data across multiple workflow processes.

## 4.3 Trigger Manager

Candidate applications **must** provide a way for admins to define and manage
the ways that processes are started automatically—i.e., changing a webhook URL
or modifying the cron expression for a time-based process trigger.

## 4.4 Execution Engine

Candidate applications should, ideally, have an execution engine that is
somewhat decoupled from the orchestration side of the application. This (or
these) engine(s) run workflow process code and emit logs and other events.

## 4.5 Timer

Candidate applications **must** be able to instantiate workflows based on the
passage of time. (E.g., "run this process every day at 7pm.")

## 4.6 Workflow Designer

Candidate applications **must** provide a user interface for designing workflow
processes.

## 4.7 Web API

Candidate applications **must** facilitate the remote initiation of workflow
processes from external systems via API.

## 4.8 Batch Queue Manager

Candidate applications should be able to gracefully handle high load via a
combination of concurrency and queueing.

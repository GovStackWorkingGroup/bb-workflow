---
description: >-
  This section will highlight important requirements or describe any additional
  cross-cutting requirements that apply to this Building Block.
---

# 5 Cross-Cutting Requirements

## 5.1 Requirements

The cross-cutting requirements described in this section are an extension of the cross-cutting requirements defined in the architecture specification document.

### 5.1.1 Private personal data (REQUIRED)

Personal data must be kept private and never shared with any parties, except where specific authorization has been granted.

### 5.1.2 Records of logs (REQUIRED)

Logs must be kept in a database of all records that are created, updated, or deleted. Logs must include timestamps and identify the user and affiliation that performed the transaction.

### 5.1.3 Source Code availability (RECOMMENDED)

Source code should be available and easily accessible.

### 5.1.4 Performance/Scalability Requirements (REQUIRED)

The Workflow Building Block application must support communication between multiple instances of the same application (e.g., when deployed in a high-availability environment such as a Kubernetes cluster with a load balancer) so that redundant copies of the workflow engine can guarantee not to duplicate individual activities in an instance or mistakenly create multiple instances of the same process when only one is requested (i.e., the Workflow engine must handle executing instances as “singletons” across a distributed computing environment).

## 5.2 Standards

The following standards are applicable to data structures in the Workflow Building Block:

### 5.3.1 BPMN (REQUIRED)

The workflow Building Block should leverage [BPMN v2.0.2 - Business Process Model and Notation](https://www.omg.org/spec/BPMN/)

### 5.3.2 OpenAPI

[OpenAPI](https://github.com/OAI/OpenAPI-Specification/blob/3.0.2/versions/3.0.2.md)

### 5.3.3 REST APIs

Rest APIs should use JSON payloads. Note that we are not using XML.

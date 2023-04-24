---
description: >-
  This section will highlight important requirements or describe any additional
  cross-cutting requirements that apply to this Building Block.
---

# 5 Cross-Cutting Requirements

The cross-cutting requirements described in this section are an extension of the cross-cutting requirements defined in the architecture specification document.&#x20;

## 5.1  Private personal data (REQUIRED)

Personal data must be kept private and never shared with any parties, except where specific authorization has been granted.

## 5.2  Records of logs (REQUIRED)

Logs must be kept in a database of all records that are created, updated, or deleted. Logs must include timestamps and identify the user and affiliation that performed the transaction.

## 5.3  Source Code availability (RECOMMENDED)

Source code should be available and easily accessible.

## 5.4 Performance/Scalability Requirements (REQUIRED)

The Workflow Building Block application must support communication between multiple instances of the same application (e.g., when deployed in a high-availability environment such as a Kubernetes cluster with a load balancer) so that redundant copies of the workflow engine can guarantee not to duplicate individual activities in an instance or mistakenly create multiple instances of the same process when only one is requested (i.e., the Workflow engine must handle executing instances as “singletons” across a distributed computing environment).

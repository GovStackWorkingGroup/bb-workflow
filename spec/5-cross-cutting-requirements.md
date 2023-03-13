# 5 Cross-Cutting Requirements

The cross-cutting requirements described in this section are an extension of the cross-cutting requirements defined in the architecture specification document. This section will describe any additional cross-cutting requirements that apply to this Building Block.

Cross-cutting requirements will use the same language (MUST or SHOULD) as specified in the architecture document.

Personal data MUST be kept private and never shared with any parties, except where specific authorization has been granted.

Logs MUST be kept in a database of all records that are created, updated, or deleted. Logs MUST include timestamps and identify the user and affiliation that performed the transaction.

Source code SHOULD be available and easily accessible.

## 5.14 Performance/Scalability Requirements

The workflow BB application must support communication between multiple instances of the same application (e.g., when deployed in a high-availability environment such as a Kubernetes cluster with a load balancer) so that redundant copies of the workflow engine can guarantee not to duplicate individual activities in an instance or mistakenly create multiple instances of the same process when only one is requested (i.e., the workflow engine must handle executing instances as “singletons” across a distributed computing environment).

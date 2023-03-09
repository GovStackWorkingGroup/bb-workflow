# (5) Cross-cutting requirements

The cross-cutting requirements described in this section are an extension of the
cross-cutting requirements defined in the architecture specification document.
This section will describe any additional cross-cutting requirements that apply
to this building block.

Cross-cutting requirements will use the same language (MUST or SHOULD) as
specified in the architecture document.

## 5.14 Performance/Scalability Requirements

5.14.1 The workflow BB application must support communication between multiple
instances of the same application (e.g., when deployed in a high-availability
environment such as a Kubernetes cluster with a load balancer) so that redundant
copies of the workflow engine can guarantee to _not_ duplicate individual
activities in an instance or mistakenly create multiple instances of the same
process when only one is requested. (I.E., The workflow engine must handle
executing instances as “singletons” across a distributed computing environment.)

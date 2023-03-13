# 2 Description

## Short Description

The Workflow Building Block (WFbb) helps to drive efficiency within GovStack by providing automation and orchestration capabilities for specified business processes within and across BBs. The Workflow BB provides design-time mapping & modeling of business processes based on mature open standards like BPMN and facilitates the run-time execution of deployed workflows in order to orchestrate process flows from initiation to completion.

## Full Description

The WFbb helps automate and control the flow of information and activities within and across various services based on predefined protocols. Workflow “processes” involve “steps” (things to be done), “gateways” (conditional logic), and “events” (things that happen). These processes may guide software systems to automate data exchange based on certain events or conditions. In addition to accelerating and automating information flow, it can be used as a mechanism to encourage or enforce best practices such as adherence to data standards, clinical guidelines, and policy.

It is important to note that from the perspective of the WFbb, any process may be defined and may make use of APIs across several applications and ministries (so long as it has access to those APIs via the IM).

From the high-level view, we should recognize that some instances of a WFbb may be deployed, for example, in the Ministry of Health (MoH) and only access services in the MoH, but another may be deployed in the MoH and access services provided by the Ministry of Insurance (MoI). So long as MoH’s WFbb is authorized to access the service at MoI (via the Information Mediator) then it will work just fine.

## Example

**The “Process Visit & Request Child Counselor” process is implemented using a WFbb installed at the Ministry of Health.**

1. Receive webhook event from clinic system with a new patient visit
2. Make GET request to another MoH API to retrieve full patient data
3. Find patient date\_of\_birth in the response to the above request, calculate age from date of birth
4. Make a POST request to the Ministry of Insurance with patient\_id and age to register the visit
5. Make a POST request to a Messaging BB to send an SMS to the patient
6. If the patient’s age is less than 18, make a POST request to a Messaging BB to send an email to staff members at the clinic requesting a child counselor to be assigned to this patient
7. Make a POST request to the original clinic system, notifying them that the workflow process has been completed

# (9) Workflows

The workflows required for this building block are outlined in detail under the
“

<p id="gdcalert8" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: undefined internal link (link text: "User Journeys and Use Cases"). Did you generate a TOC? </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert9">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

[User Journeys and Use Cases](#user-journeys-and-use-cases)” section below.

Generally, however, the major workflow that is supported by this BB is that
another BB or application will request to start an instance of a process by
calling an API. There will be an immediate response to that request, indicating
that _either_ the process has started or, in the unlikely event that the process
is to be completed synchronously, that the process has finished. If synchronous,
the response to the initial request will be the output of the process.

## User Journeys and Use Cases

The WFbb is present in multiple use cases. Use cases can be found in the
[logical process blueprint](https://docs.google.com/document/d/1DRjpuyINjf6YVBRrEh9Q6VdB0zVzq1aqGQOukpktWZ8/edit#heading=h.f0ewpzm6b55p)
and a subset of those that we focus on below can be found
[here](https://drive.google.com/drive/folders/1JYdcmeUhJrwl7TfSuVtBJ9a0C335VbRg).
These user journeys and use cases have been referenced by the authors of the
specification to ensure that the functional requirements for the spec suit the
needs of the proposed implementations.

_NOTE THAT ALL TABLES HERE ARE FOR DISPLAY PURPOSES ONLY. TO EDIT A TABLE, MAKE
A CHANGE TO THE SOURCE_

### Postpartum and Infant Care

#### [Promotion for PPIC](https://docs.google.com/document/d/1DRjpuyINjf6YVBRrEh9Q6VdB0zVzq1aqGQOukpktWZ8/edit#heading=h.b4x1x2nfix1p)

<table>
  <tr>
   <td>User journey
   </td>
   <td>Use-case
   </td>
   <td>Capabilities
   </td>
   <td>Functional requirements
   </td>
  </tr>
  <tr>
   <td>PPIC
   </td>
   <td>Promotion
   </td>
   <td>CHW uses a Education Materials Database(Content Management System/Registration)
   </td>
   <td>GET resource from external system
   </td>
  </tr>
  <tr>
   <td>PPIC
   </td>
   <td>Promotion
   </td>
   <td>CHW selects some materials
   </td>
   <td>n/a
   </td>
  </tr>
  <tr>
   <td>PPIC
   </td>
   <td>Promotion
   </td>
   <td>CHW Chooses a Demographic Group (contact list) from a Demographic Registry(Registration/Registry)
   </td>
   <td>GET resource from external system
   </td>
  </tr>
  <tr>
   <td>PPIC
   </td>
   <td>Promotion
   </td>
   <td>Materials are sent to list of contacts from Demographic Group
   </td>
   <td>Initiate process of sending out mails to uploaded list of contacts
   </td>
  </tr>
</table>

#### [Payment for PPIC](https://docs.google.com/document/d/1DRjpuyINjf6YVBRrEh9Q6VdB0zVzq1aqGQOukpktWZ8/edit#heading=h.alpzo6mzyzsw)

<table>
  <tr>
   <td>User journey
   </td>
   <td>Use-case
   </td>
   <td>Capabilities
   </td>
   <td>Functional requirements
   </td>
  </tr>
  <tr>
   <td>PPIC
   </td>
   <td><a href="https://docs.google.com/document/d/1DRjpuyINjf6YVBRrEh9Q6VdB0zVzq1aqGQOukpktWZ8/edit#heading=h.alpzo6mzyzsw">Payments - Postpartum and Infant Care</a>
   </td>
   <td>(Voucher Request) Validate the mother has completed all steps (visited a pediatrician, procured medicine and nutrition supplies, and visited the therapy center) by connecting to MCTS registry
   </td>
   <td>Must be able to start a workflow process via API. Support submission of data payload through variables) in the same API call
   </td>
  </tr>
  <tr>
   <td>PPIC
   </td>
   <td><a href="https://docs.google.com/document/d/1DRjpuyINjf6YVBRrEh9Q6VdB0zVzq1aqGQOukpktWZ8/edit#heading=h.alpzo6mzyzsw">Payments - Postpartum and Infant Care</a>
   </td>
   <td>(Voucher Request) Verify mother has no pending incentive voucher for this milestone? (from the MCTS registry)
   </td>
   <td>Perform calculation
   </td>
  </tr>
  <tr>
   <td>PPIC
   </td>
   <td><a href="https://docs.google.com/document/d/1DRjpuyINjf6YVBRrEh9Q6VdB0zVzq1aqGQOukpktWZ8/edit#heading=h.alpzo6mzyzsw">Payments - Postpartum and Infant Care</a>
   </td>
   <td>(Voucher Request) Determine payment amounts for HC worker and mother
   </td>
   <td>Perform calculation
   </td>
  </tr>
  <tr>
   <td>PPIC
   </td>
   <td><a href="https://docs.google.com/document/d/1DRjpuyINjf6YVBRrEh9Q6VdB0zVzq1aqGQOukpktWZ8/edit#heading=h.alpzo6mzyzsw">Payments - Postpartum and Infant Care</a>
   </td>
   <td>(Voucher Request) Generate cash payment voucher (Voucher number, QR Code, the voucher serial number and its expiry date. At this point the voucher will be flagged Pre-Activated)
   </td>
   <td>Make HTTP request
   </td>
  </tr>
  <tr>
   <td>PPIC
   </td>
   <td><a href="https://docs.google.com/document/d/1DRjpuyINjf6YVBRrEh9Q6VdB0zVzq1aqGQOukpktWZ8/edit#heading=h.alpzo6mzyzsw">Payments - Postpartum and Infant Care</a>
   </td>
   <td>(Payment Initiation) Submit Payments csv file for approval and budgets (From Ministry of Health to Treasury Deparment)
   </td>
   <td>n/a
   </td>
  </tr>
  <tr>
   <td>PPIC
   </td>
   <td><a href="https://docs.google.com/document/d/1DRjpuyINjf6YVBRrEh9Q6VdB0zVzq1aqGQOukpktWZ8/edit#heading=h.alpzo6mzyzsw">Payments - Postpartum and Infant Care</a>
   </td>
   <td>(Payment Initiation) (Iterate for reach record in CSV file) Verify payment details (ID Drectory Service)
   </td>
   <td>Read from file, loop
   </td>
  </tr>
  <tr>
   <td>PPIC
   </td>
   <td><a href="https://docs.google.com/document/d/1DRjpuyINjf6YVBRrEh9Q6VdB0zVzq1aqGQOukpktWZ8/edit#heading=h.alpzo6mzyzsw">Payments - Postpartum and Infant Care</a>
   </td>
   <td>(Payment Initiation) Process Payments csv approval / rejected by Treasury
   </td>
   <td>Perform caculation
   </td>
  </tr>
  <tr>
   <td>PPIC
   </td>
   <td><a href="https://docs.google.com/document/d/1DRjpuyINjf6YVBRrEh9Q6VdB0zVzq1aqGQOukpktWZ8/edit#heading=h.alpzo6mzyzsw">Payments - Postpartum and Infant Care</a>
   </td>
   <td>(Payment Disbursement) Submit Payment Instruction (from Disbursement Organization - Payer) to Payment Gateway (Payments BB supported by Workflow BB in the back-end)
   </td>
   <td>Make HTTP request
   </td>
  </tr>
  <tr>
   <td>PPIC
   </td>
   <td><a href="https://docs.google.com/document/d/1DRjpuyINjf6YVBRrEh9Q6VdB0zVzq1aqGQOukpktWZ8/edit#heading=h.alpzo6mzyzsw">Payments - Postpartum and Infant Care</a>
   </td>
   <td>(Payment Disbursement) Payment Gateway query to ID Directory Service (requesting Mobile Money provider details for mother)
   </td>
   <td>n/a
   </td>
  </tr>
</table>

#### [Case Management for PPIC](https://docs.google.com/document/d/1DRjpuyINjf6YVBRrEh9Q6VdB0zVzq1aqGQOukpktWZ8/edit#heading=h.rtd5sp81sw9b)

<table>
  <tr>
   <td>User journey
   </td>
   <td>Use-case
   </td>
   <td>Capabilities
   </td>
   <td>Functional requirements
   </td>
  </tr>
  <tr>
   <td>PPIC
   </td>
   <td>Case Management
   </td>
   <td>1. Validate client identifier (biometrics)
   </td>
   <td>If validation requires checking with multiple other applications, this might require workflow. (Must be able to start a workflow process via API. Support submission of data payload through variables) in the same API call)
   </td>
  </tr>
  <tr>
   <td>PPIC
   </td>
   <td>Case Management
   </td>
   <td>3. Submit new client encounter details to case management system
   </td>
   <td>If a multi-step process is required for submitting encounter details this might be handled by workflow. (Must be able to start a workflow process via API. Support submission of data payload through variables) in the same API call)
   </td>
  </tr>
</table>

### Unconditional Social Cash Transfer

#### [Eligibility for USCT](https://docs.google.com/document/d/1pBr0wHt9W4boeEzCWA21TIzhetPPlA4ad3PrQHWwNcU/edit#heading=h.9l9ar3fqqo6u)

<table>
  <tr>
   <td>User journey
   </td>
   <td>Use-case
   </td>
   <td>Capabilities
   </td>
   <td>Functional requirements
   </td>
  </tr>
  <tr>
   <td>USCT
   </td>
   <td><a href="https://docs.google.com/document/d/1pBr0wHt9W4boeEzCWA21TIzhetPPlA4ad3PrQHWwNcU">001: Eligibility Determination and Benefit Package(s) Design</a>
   </td>
   <td>Send beneficiary data from Registration BB to Workflow BB
   </td>
   <td>Must be able to start a workflow process via API. Support submission of data payload through variables) in the same API call
   </td>
  </tr>
  <tr>
   <td>USCT
   </td>
   <td><a href="https://docs.google.com/document/d/1pBr0wHt9W4boeEzCWA21TIzhetPPlA4ad3PrQHWwNcU">001: Eligibility Determination and Benefit Package(s) Design</a>
   </td>
   <td>Check if the beneficiary is above the age of 18 from National ID Registry
   </td>
   <td>Must be able to perform an external task or similar which calls remote service (REST API). Response from Remote service should contain requested data and/or response code
   </td>
  </tr>
  <tr>
   <td>USCT
   </td>
   <td><a href="https://docs.google.com/document/d/1pBr0wHt9W4boeEzCWA21TIzhetPPlA4ad3PrQHWwNcU">001: Eligibility Determination and Benefit Package(s) Design</a>
   </td>
   <td>Check if the beneficiary is employed from Employment Registry
   </td>
   <td>Must be able to perform an external task or similar which calls remote service (REST API). Response from Remote service should contain requested data and/or response code
   </td>
  </tr>
  <tr>
   <td>USCT
   </td>
   <td><a href="https://docs.google.com/document/d/1pBr0wHt9W4boeEzCWA21TIzhetPPlA4ad3PrQHWwNcU">001: Eligibility Determination and Benefit Package(s) Design</a>
   </td>
   <td>Check if the beneficiary is receiving any income from Taxk Registry
   </td>
   <td>Must be able to perform an external task or similar which calls remote service (REST API). Response from Remote service should contain requested data and/or response code
   </td>
  </tr>
</table>

#### [Payment (type 1) for USCT](https://docs.google.com/document/d/1uP_v9BYDg8P7B7anRA1e-F3XLFb9MFMYbllfbYZGAhI/edit#heading=h.9l9ar3fqqo6u)

<table>
  <tr>
   <td>User journey
   </td>
   <td>Use-case
   </td>
   <td>Capabilities
   </td>
   <td>Functional requirements
   </td>
  </tr>
  <tr>
   <td>USCT
   </td>
   <td><a href="https://docs.google.com/document/d/1uP_v9BYDg8P7B7anRA1e-F3XLFb9MFMYbllfbYZGAhI/edit#heading=h.9l9ar3fqqo6u">001: Payment (non-electronic/cash payments)</a>
   </td>
   <td>Receive trigger from Scheduling BB that due date has been reached
   </td>
   <td>Initiate worfklow via webhook
   </td>
  </tr>
  <tr>
   <td>USCT
   </td>
   <td><a href="https://docs.google.com/document/d/1uP_v9BYDg8P7B7anRA1e-F3XLFb9MFMYbllfbYZGAhI/edit#heading=h.9l9ar3fqqo6u">001: Payment (non-electronic/cash payments)</a>
   </td>
   <td>Load SRIS (Social Registry Information System) workload (i.e a list of eligible beneficiaries that are due for payment)
   </td>
   <td>Make HTTP GET request
   </td>
  </tr>
  <tr>
   <td>USCT
   </td>
   <td><a href="https://docs.google.com/document/d/1uP_v9BYDg8P7B7anRA1e-F3XLFb9MFMYbllfbYZGAhI/edit#heading=h.9l9ar3fqqo6u">001: Payment (non-electronic/cash payments)</a>
   </td>
   <td>Iterate through each beneficiary and compute payment amounts due to beneficiary
   </td>
   <td>Perform calculation, loop
   </td>
  </tr>
  <tr>
   <td>USCT
   </td>
   <td><a href="https://docs.google.com/document/d/1uP_v9BYDg8P7B7anRA1e-F3XLFb9MFMYbllfbYZGAhI/edit#heading=h.9l9ar3fqqo6u">001: Payment (non-electronic/cash payments)</a>
   </td>
   <td>Request payment for beneficiary (Payment Building Block)
   </td>
   <td>Make HTTP POST request
   </td>
  </tr>
  <tr>
   <td>USCT
   </td>
   <td><a href="https://docs.google.com/document/d/1uP_v9BYDg8P7B7anRA1e-F3XLFb9MFMYbllfbYZGAhI/edit#heading=h.9l9ar3fqqo6u">001: Payment (non-electronic/cash payments)</a>
   </td>
   <td>Set TransactionID for successful payment and mark beneficiary as paid (Social Registry)
   </td>
   <td>Make HTTP POST request
   </td>
  </tr>
</table>

#### [Payment (type 2) for USCT](https://docs.google.com/document/d/1Eu52kE2TC1qZ5ps5-fWBGD570G-gB7mt-JYuIrTroLQ/edit#heading=h.9l9ar3fqqo6u)

<table>
  <tr>
   <td>User journey
   </td>
   <td>Use-case
   </td>
   <td>Capabilities
   </td>
   <td>Functional requirements
   </td>
  </tr>
  <tr>
   <td>USCT
   </td>
   <td><span style="text-decoration:underline;">002: Payment (non-electronic/cash payments)</span>
   </td>
   <td>Receive trigger from Scheduling BB that due date has been reached
   </td>
   <td>Allow the initiation of an async business process via POST to API.
   </td>
  </tr>
  <tr>
   <td>USCT
   </td>
   <td><span style="text-decoration:underline;">002: Payment (non-electronic/cash payments)</span>
   </td>
   <td>Load SRIS (Social Registry Information System) workload (i.e a list of eligible beneficiaries that are due for payment)
   </td>
   <td>Make HTTP GET request
   </td>
  </tr>
  <tr>
   <td>USCT
   </td>
   <td><span style="text-decoration:underline;">002: Payment (non-electronic/cash payments)</span>
   </td>
   <td>Request beneficiary payment details (from Social Registry)
   </td>
   <td>Make HTTP GET request
   </td>
  </tr>
  <tr>
   <td>USCT
   </td>
   <td><span style="text-decoration:underline;">002: Payment (non-electronic/cash payments)</span>
   </td>
   <td>Compute payment amount for beneficiary
   </td>
   <td>Perform calculation
   </td>
  </tr>
  <tr>
   <td>USCT
   </td>
   <td><span style="text-decoration:underline;">002: Payment (non-electronic/cash payments)</span>
   </td>
   <td>Generate TransactionID for payment due
   </td>
   <td>Generate rand (execute script)
   </td>
  </tr>
  <tr>
   <td>USCT
   </td>
   <td><span style="text-decoration:underline;">002: Payment (non-electronic/cash payments)</span>
   </td>
   <td>Request payment voucher (Payment Building Block)
   </td>
   <td>Make HTTP request
   </td>
  </tr>
  <tr>
   <td>USCT
   </td>
   <td><span style="text-decoration:underline;">002: Payment (non-electronic/cash payments)</span>
   </td>
   <td>Make voucher as paid (Payment Building Block)
   </td>
   <td>Make HTTP request
   </td>
  </tr>
  <tr>
   <td>USCT
   </td>
   <td><span style="text-decoration:underline;">002: Payment (non-electronic/cash payments)</span>
   </td>
   <td>Mark beneficiary as paid (Social Registry)
   </td>
   <td>Make HTTP request
   </td>
  </tr>
</table>

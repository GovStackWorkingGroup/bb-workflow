# (10) Other resources

## Questions & Answers from TAC 1 (May 10th, 2022)

1. Sherman Kong - “Does workflow BB necessitate some form of BB or API registry
   so during workflow design we know which BB to call / trigger at which step of
   the workflow process? Otherwise where would one find the list of BBs that
   that workflow BB can work with? Or perhaps this is a general GovStack arch. /
   EA requirement.”
   1. TD - “Yes! Workflow itself provides a /api/processes endpoint which
      returns a list of business processes: (a) register_child, (b)
      pay_health_wokers, (c) count_to_ten, (d) etc.”
   2. TD - “Then... the IM provides an endpoint /api/directory which tells us
      which APIs are available via the IM across GovStack. That IM
      /api/directory is used at "design time" by people who are building
      business processes on the WF BB.”
2. Bramhanand Jha - “How workflow BB caters to different applications pertaining
   to different domains having different process flow and data flow need?” 3.
   Taylor Downs - “For your first q: the BPMN specification, along with the
   ability to execute processes synchronously or asynchronously, provides for
   all kinds of data flow needs. While cutting across domains, you'll commonly
   see a data transformation step, such as "replace keys matching "patient_name"
   in a payload with keys "registeredPatientFullName", or something like that.
   Is this what you're asking about?” 1. Bramhanand Jha - “API and data element
   change w.r.t. process change and data flow change is fine. Point is these
   change is time consuming once we consider diversity in domains, processes and
   data flows and that's make it little variance with concept of BB.”
3. Bramhanand Jha - “Also, in midst of cloud deployment, work package comes that
   does same thing as workflow BB. So, how is it different than package.” 4.
   Taylor Downs - “And Bramhanand Jha, apologies, I don't fully understand your
   second Q. Would you expand a bit? For what it's worth, most workflow engines
   are deployed on the cloud and accessed via web APIs. Think of them as small
   black boxes with lists of processes that you could ask to initiate. You
   request to initiate process "A" and it does so, faithfully.”

##

## UI Examples

Example user interfaces provide illustrative context for common functionalities.

**Building a process**

<p id="gdcalert9" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image8.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert10">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image8.png 'image_tooltip')

**Adding arbitrary scripts to a process**

<p id="gdcalert10" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image9.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert11">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image9.png 'image_tooltip')

**Adding new activities to existing processes**

<p id="gdcalert11" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image10.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert12">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image10.png 'image_tooltip')

<p id="gdcalert12" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image11.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert13">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image11.png 'image_tooltip')

**Adding credentials for use in a process**

<p id="gdcalert13" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image12.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert14">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image12.png 'image_tooltip')

**Configuring an HTTP request as an activity in a process**

<p id="gdcalert14" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image13.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert15">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image13.png 'image_tooltip')

**Adding a conditional gateway to a process**

<p id="gdcalert15" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image14.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert16">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image14.png 'image_tooltip')

These UI examples are meant to aid reviewers and developers in understanding the
high-level requirements of the WFbb, not to specify certain design elements or
guidelines.

1. Link to architecture requirements document (and specific sections within that
   document, such as cross-functional requirements, general recommendations)
2. Link to use cases document – this document may be a valuable resource while
   developing workflows to ensure that a variety of different use cases are
   covered by the building block definition.
3. Link to BB criteria and maturity metrics document created by Tanvir
4. Link to Low Resource Settings document
5. Link to GitHub repository and OpenAPI documentation site for the building
   blocks.

@method=GET @endpoint=/{GovStackInstance}/{memberClass}/{memberCode}/{applicationCode}/processes
Feature: View the details of a workflow process 

  @smoke
  Scenario: A GovStack user wants to see the details of a workflow process
    When we request the details of an existing workflow process from the api
    Then we receive status code 200 for the workflow process

  @unit @positive
    Scenario: Successfully retrieved the details of a workflow process
    When we request the details of an existing workflow process from the api
    Then we receive status code 200 for the workflow process
    Then workflow process fields are aligned to api spec
  
  @unit @negative
    Scenario: Unable to retrieve the details of a workflow process
        When we request the details of an existing workflow process from the api
        Then we receive status code 400 for the workflow process
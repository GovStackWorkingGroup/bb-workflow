@method=GET @endpoint=/{GovStackInstance}/{memberClass}/{memberCode}/{applicationCode}/instances
Feature: View the details of a workflow process instance

  @smoke
  Scenario: A GovStack user wants to see the details of a workflow process instance
    When we request the details of an existing workflow instance from the api
    Then we receive status code 200 for the workflow process instance

  @unit @positive
   Scenario: Successfully retrieved the details of a workflow process instance
      When we request the details of an existing workflow instance from the api
      Then we receive status code 200 for the workflow process instance
      Then workflow process instance fields are aligned to api spec

  @unit @negative
    Scenario: Unable to retrieve the details of a workflow process instance
      When we request the details of an existing workflow instance from the api
      Then we receive status code 400 for the workflow process instance
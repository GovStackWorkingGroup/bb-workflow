@method=GET @endpoint=/{GovStackInstance}/{memberClass}/{memberCode}/{applicationCode}/instances
Feature: Stop workflow process instance

  @smoke
  Scenario: A GovStack user wants to stop a workflow process instance
    When We request to stop a workflow process from the api
    Then we receive status code 201 for the request

  @unit @positive
   Scenario: Successfully stop a workflow process instance
    When We request to stop a workflow process from the api
    Then we receive status code 201 for the request
    Then stopped workflow process fields are aligned to api spec

  @unit @negative
  Scenario: Unable start a workflow process instance
    When We request to stop a workflow process from the api
    Then we receive status code 400 for the request

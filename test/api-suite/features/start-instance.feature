@method=GET @endpoint=/{GovStackInstance}/{memberClass}/{memberCode}/{applicationCode}/instances
Feature: Start workflow process instance

  @smoke
  Scenario: A GovStack user wants to start a workflow process instance
    When We request to start a workflow process from the api
    Then we receive status code 200 for the request
    Then started workflow process fields are aligned to api spec

  @unit @positive
   Scenario: Successfully start a workflow process instance
    When We request to start a workflow process from the api
    Then we receive status code 200 for the request
    Then started workflow process fields are aligned to api spec

  @unit @negative
  Scenario: Unable start a workflow process instance
    When We request to start a workflow process from the api
    Then we receive status code 400 for the request

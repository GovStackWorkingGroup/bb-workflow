Feature: View the details of a workflow process instance

  Scenario: A GovStack user wants to see the details of a workflow process instance
    When We request the details of an existing workflow processes instance from the api
    Then we receive status code 200 for the workflow process instance
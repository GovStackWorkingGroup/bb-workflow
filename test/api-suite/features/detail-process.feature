Feature: View the details of a workflow process 

  Scenario: A GovStack user wants to see the details of a workflow process
    When We request the details of an existing workflow processes from the api
    Then we receive status code 200 for the workflow process

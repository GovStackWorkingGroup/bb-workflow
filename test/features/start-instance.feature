Feature: Start workflow process

  Scenario: A GovStack user wants to start a workflow process
    When We request to start a workflow process from the api
    Then we receive status code 201 to confirm success
    Then started workflow process fields are aligned to api spec

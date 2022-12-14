
Feature: Start workflow process

  Scenario: A GovStack user wants to start a workflow process
    When We request to start a workflow process from the api
    Then we receive status code 200 to confirm success
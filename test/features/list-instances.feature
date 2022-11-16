Feature: View a list of workflow process instances

  Scenario: Another GovStack user wants to see which workflow process instances are available
    When we request a list of instances from the api
    Then we receive status code 200 for the instances

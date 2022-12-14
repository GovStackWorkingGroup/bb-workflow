
Feature: View a list of workflow process instances

  Scenario: A GovStack user wants to see a list of historical workflow process instances
    When we request a list of instances from the api
    Then we receive status code 200 for the instances
Feature: View a list of workflow processes

  Scenario: Another GovStack user wants to see which workflow processes are available
    When we request a list of processes from the api
    Then we receive 3 processes

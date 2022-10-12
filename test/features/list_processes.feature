Feature: viewing list of Processes
  # process is a definition of workflow instance capabilities

  Scenario: run a simple test to view Processes
    When we request a list of processes
    Then we receive 3 processes

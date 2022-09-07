Feature: viewing list of Processes
  # process is a definition of workflow instance capabilities

  Scenario: run a simple test to view Processes
    Given we have token from login
    When we request list from processes endpoint
    Then we receive list of processes having predefined number of processes
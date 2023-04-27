@method=GET @endpoint=/{GovStackInstance}/{memberClass}/{memberCode}/{applicationCode}/processes
Feature: View a list of workflow processes

  @smoke
  Scenario: Another GovStack user wants to see which workflow processes are available

    When we request a list of processes from the api
    Then we receive status code 200 for the processes
    Then process fields are aligned to api spec

  @unit @positive
    Scenario: Successfully retrieved a list of available workflow processes
    When we request a list of processes from the api
    Then we receive status code 200 for the processes
    Then process fields are aligned to api spec

  @unit @negative
    Scenario: Unable to retrieve a list of available workflow processes
    When we request a list of processes from the api
    Then we receive status code 400 for the processes
@method=GET @endpoint=/{GovStackInstance}/{memberClass}/{memberCode}/{applicationCode}/instances
Feature: View a list of workflow process instances

  @smoke
  Scenario: A GovStack user wants to see a list of historical workflow process instances
    When we request a list of instances from the api
    Then we receive status code 200 for the instances
    Then instance fields are aligned to api spec

  @unit @positive
    Scenario: Successfully retrieved a list of of workflow process instances
      When we request a list of instances from the api
      Then we receive status code 200 for the instances
      Then instance fields are aligned to api spec
    
  @unit @negative
     Scenario: Unable to retrieve a list of available workflow processes
      When we request a list of instances from the api
      Then we receive status code 400 for the instances

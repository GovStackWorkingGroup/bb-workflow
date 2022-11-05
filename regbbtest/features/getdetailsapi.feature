@apitest @duckduckgo
Feature: MCC BB API Integration Testing  
  As a API Integration Team,
  I want to Test API Specs and Endpoint of App Services,
  So I can Test App is  GovStack Compliant.

  # The "@" annotations are tags
  # One feature can have multiple scenarios
  # The lines immediately after the feature title are just comments

  Scenario: Test Home Page Get Request of API Service  
    Given the API URL home page is queried   
    #When the user searches for "root"
    Then the response status code is "200"
    When the response contains uuid data as 
    


  Feature: login page
    Positive login for administrator, who wants to administrate BPM engine on behalf of her organisation

    Scenario: User with Administrator role logs in

      Given I go to login page
      When I click on login
      Then I should see page for my credentials

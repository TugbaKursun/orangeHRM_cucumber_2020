Feature: Login
  As an user I want to login with different credentials

  @Admin @smoke
  Scenario: Login as an admin
    When user logs in as an admin
    Then user verifies that "Dashboard" page subtitle is displayed
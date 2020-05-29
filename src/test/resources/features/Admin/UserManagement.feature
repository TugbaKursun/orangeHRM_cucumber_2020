Feature: user management

  Background:
    When user logs in as an admin
    Then user clicks on "Admin" module
    @hovers
  Scenario: user hovers on User Management
    When user hovers on "User Management" submodule
    Then user  verifies that "Users" submodule is displayed

  Scenario: add a user
    When user clicks on "User Management" submodule
    Then user clicks "Users" submodule
    And  user clicks on "Add" button
    Then user fill out the form:
    |  User Role    | ESS       |
    |  Employee Name| John      |
    |  Username     | John Bryon|
    |  Status       | Enabled   |

    Then use clicks on "Save" button



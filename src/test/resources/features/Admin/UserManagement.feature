Feature: user management

  Background:
    When user logs in as an admin
    Then user clicks on "Admin" module

  @hovers
  Scenario: user hovers on User Management
    When user hovers on "User Management" submodule
    Then user  verifies that "Users" submodule is displayed

  @searchUser
  Scenario Outline: admin can be able to search a user with <username> and <EmployeeName>
                    then verifies <EmployeeName> on User Management page
    When admin search Employee info by using  "<username>" and "<EmployeeName>":
    Then admin verifies that employee name "<EmployeeName>" is displayed on User Management page

    Examples:
        |username     | EmployeeName     |
        |hannah.flores| Hannah Flores 	 |
        |robert.craig | Robert Craig     |

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



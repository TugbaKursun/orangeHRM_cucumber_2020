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

  @resetUserSearch
  Scenario: reset user search on User management page
      Given  user hovers on "User Management" submodule
      Then   user clicks on "Users" submodule
      When   admin clicks the reset button
      Then   admin verifies that row size is equal to expected size

   @regression
  Scenario: clicking toggle triangle icon
     Given user hovers on "User Management" submodule
     Then  user clicks on "Users" submodule
     When  admin clicks on the triangle icon
     Then  current table should disappear

  @regression @checkingAllSelected
  Scenario: verifying that all username boxes is selected
    Given user hovers on "User Management" submodule
    Then  user clicks on "Users" submodule
    When  user clicks on user list check box
    Then  all list should be selected


  @regression @checkingEachBoxSelected
  Scenario: verifying that each username box is selected
    Given user hovers on "User Management" submodule
    Then  user clicks on "Users" submodule
    When  user clicks on username check box from the list
    Then  verify that username check box is selected
    Then  user clicks on username in order to unchecked  from the list
    And   verify that username check box is unselected



    @regression @unselectedCheckbox
      Scenario: select employee list, uncheck one employee then verify allcheckbox is unselected
      Given user hovers on "User Management" submodule
      Then  user clicks on "Users" submodule
      When  user clicks on user list check box
      And   user clicks on "6" check box in order to make unselected
      And   verify that all-checkbox and "6" checkbox are unselected





      @employeeListSelection
      Scenario: selecting each employee from employee list then unselect each of them
      Given user hovers on "User Management" submodule
      Then  user clicks on "Users" submodule
      Then  user clicks each employee check box from the list
      And   user verify that each employee can be able to select
      Then  user clicks each employee check box from the list in order to unselect
      And   user verify that each employee can be able to unselect



  @sortAlphabetically
  Scenario: sorting user name on employee list from the table on usermanagement page
    Given user hovers on "User Management" submodule
    Then  user clicks on "Users" submodule
    When  user clicks on username triangle arrow
    Then  user verify that user names are alphabetically ordered in the table





  Scenario: sorting employee name on employee list from the table on usermanagement page
    Given user hovers on "User Management" submodule
    Then  user clicks on "Users" submodule
    When  user clicks on employee name triangle arrow
    Then  user verify that employee names are alphabetically ordered in the table
    And   user clicks on username triangle arrow
    Then  user verify that employee names are unsorted in the list



#  Scenario: add a user
#    When user clicks on "User Management" submodule
#    Then user clicks "Users" submodule
#    And  user clicks on "Add" button
#    Then user fill out the form:
#    |  User Role    | ESS       |
#    |  Employee Name| John      |
#    |  Username     | John Bryon|
#    |  Status       | Enabled   |
#
#    Then use clicks on "Save" button



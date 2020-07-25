@skills
Feature: user should be able to add employee on skills page

  Background:
    When user logs in as an admin
    Then user clicks on "Admin" module
    Given user hovers on "Qualifications" submodule
    Then user clicks on "Skills" submodule


    @ADDSKILLS
    Scenario Outline: admin can be able to add person with description
      When admin clicks add button
      Given admin adds an employee with "<Name>" and it's "<Description>"
      Then admin clicks the save button
      And admin verifies that "<Name>" and "<Description>" are displayed in the Skills table
      Examples:
      |Name         |Description|
      |Yedi Cuceler |7 Years Experience|
      |Rapunzel     |3 Years Experience|
      |Heidi        |1 Year Experience |
      |Sirinler     |4 Year Experience |
      |Kirmizi Kiz  |2 Year Experience |
      |Ali Baba     |10 Year Experience|

      @deleteEmployee
      Scenario Outline: admin can be able to delete employees information from the skills table
      When admin clicks on "<employees checkbox>" from the skills table
      Then admin clicks on delete button
      And admin verifies that "<employees checkbox>" is not displayed in the skills table
      Examples:
      |employees checkbox|
      |Heidi             |
      |Yedi Cuceler      |

      @selectAllEmployees
      Scenario: admin can be able to check all employees' checkBox
      When admin clicks all checkbox  on the Skills table
      Then admin verifies that all name of employees is selected

      @unselectedAllEMployees
      Scenario: admin can be able to unselect all employees checkbox on the skill table
      When admin clicks all checkbox to unselect all employees
      Then admin verifies that all names are unselected

      @unSelectOneCheckBox
      Scenario: admin can be able to unselect specific checkbox on skill table
      When admin clicks any checkbox
      Then admin verifies that sprecific checkbox is unselected

      @deleteAll
      Scenario: admin can be able to delete employee information from the skills table
      Then admin deletes employees from skills table by clicking select all checkbox
      And  admin verifies that all employees are deleted




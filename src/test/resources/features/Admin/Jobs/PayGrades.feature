Feature: job title/ PayGrades

  Background:
    When user logs in as an admin
    Then user clicks on "Admin" module
    Given user hovers on "Job" submodule
    Then user clicks on "Pay Grades" submodule


  @
  Scenario: verifying that all jobtitle boxes is selected
    Given user hovers on "Job" submodule
    Then  user clicks on "Job Titles" submodule
    When  user clicks on job title list check box
    Then  all list should be selected
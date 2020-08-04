Feature: user job title

  Background:
    When user logs in as an admin
    Then user clicks on "Admin" module
    Given user hovers on "Job" submodule
    Then user clicks on "Job Titles" submodule

   @checkingAllSelectedJobTitles
  Scenario: verifying that all jobtitle boxes is selected
    Given user hovers on "Job" submodule
    Then  user clicks on "Job Titles" submodule
    When  user clicks on job title list check box
    Then  all list should be selected

@addjobtitle
  Scenario: user adds a new jobtitle
    Given user clicks on the add button
    Then user enters job title "SDET" as a job title input
    And user clicks on the save button
  #  Then user verify that"Successfully Saved" message pops up on the top
  Then user verify that list of job titles contains "SDET" job title

  @deletejobtitle
  Scenario: user deletes jobtitle
    Given user clicks on the checkbox of jobtitle
    Then user clicks delete button
    And user confirmed okay delete "SDET" from pops up confirmation box
  #  Then user verify that"Successfully Saved" message pops up on the top
    Then user verify that list of job titles does not contain "SDET" job title


  @editJobTitle
  Scenario:
    Given user clicks on the job title name
    And user clicks on the edit button
    Then user enters "QA Engineer" as a job title name
    And user clicks on the save button
    #  Then user verify that"Successfully Saved" message pops up on the top
    Then user verify that list of job titles contains "QA Engineer" job title
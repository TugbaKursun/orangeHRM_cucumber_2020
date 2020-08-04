Feature: User should able to edit general information page

  Background:
    When user logs in as an admin
    Then user clicks on "Admin" module
    Given user hovers on "Organization" submodule
    Then user clicks on "General Information" submodule

    @editOrganizationName
    Scenario: edit organization name
      Given user clicks on the edit button
      Then user enters "OrangeTech" as a organization name
      And user clicks on the save button
      Then user verifies that "Successfully Saved" message pops up on the top


   @editGeneralInfo
      Scenario: fill out the organization info and edit
        Given user clicks on the edit button
        Then user enters following information:
        | organization name   | OrangeTech         |
        | phone               | 9656714567         |
        | email               | orange@gamil.com   |
        | address             | Orange street ln   |
        | city                | California         |
        | zip                 | 78787              |
        | note                | Orange HRM Software|
        | taxId               | 12837575           |
        | registration number | A23456             |
        | fax                 | orange@gamil.com   |
        | address2            | address            |
        | state               | NJ                 |
        | country             | US                 |
     And user clicks on the save button
     Then user verifies that following information is displayed











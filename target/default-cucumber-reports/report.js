$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Admin/Qualification/Skills.feature");
formatter.feature({
  "name": "user should be able to add employee on skills page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@skills"
    }
  ]
});
formatter.scenarioOutline({
  "name": "admin can be able to add person with description",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ADDSKILLS"
    }
  ]
});
formatter.step({
  "name": "admin clicks add button",
  "keyword": "When "
});
formatter.step({
  "name": "admin adds an employee with \"\u003cName\u003e\" and it\u0027s \"\u003cDescription\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "admin clicks the save button",
  "keyword": "Then "
});
formatter.step({
  "name": "admin verifies that \"\u003cName\u003e\" and \"\u003cDescription\u003e\" are displayed in the Skills table",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Name",
        "Description"
      ]
    },
    {
      "cells": [
        "Yedi Cuceler",
        "7 Years Experience"
      ]
    },
    {
      "cells": [
        "Rapunzel",
        "3 Years Experience"
      ]
    },
    {
      "cells": [
        "Heidi",
        "1 Year Experience"
      ]
    },
    {
      "cells": [
        "Sirinler",
        "4 Year Experience"
      ]
    },
    {
      "cells": [
        "Kirmizi Kiz",
        "2 Year Experience"
      ]
    },
    {
      "cells": [
        "Ali Baba",
        "10 Year Experience"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user logs in as an admin",
  "keyword": "When "
});
formatter.match({
  "location": "Login_StepDefinition.user_logs_in_as_an_admin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Admin\" module",
  "keyword": "Then "
});
formatter.match({
  "location": "UserManagement_StepDefinition.user_clicks_on_module(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user hovers on \"Qualifications\" submodule",
  "keyword": "Given "
});
formatter.match({
  "location": "UserManagement_StepDefinition.user_hovers_on_submodule(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Skills\" submodule",
  "keyword": "Then "
});
formatter.match({
  "location": "UserManagement_StepDefinition.user_clicks_on_submodule(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "admin can be able to add person with description",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@skills"
    },
    {
      "name": "@ADDSKILLS"
    }
  ]
});
formatter.step({
  "name": "admin clicks add button",
  "keyword": "When "
});
formatter.match({
  "location": "Skills_StepDefinition.admin_clicks_add_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin adds an employee with \"Yedi Cuceler\" and it\u0027s \"7 Years Experience\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Skills_StepDefinition.admin_adds_an_employee_with_and_it_s(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin clicks the save button",
  "keyword": "Then "
});
formatter.match({
  "location": "Skills_StepDefinition.admin_clicks_the_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin verifies that \"Yedi Cuceler\" and \"7 Years Experience\" are displayed in the Skills table",
  "keyword": "And "
});
formatter.match({
  "location": "Skills_StepDefinition.admin_verifies_that_and_are_displayed_in_the_Skills_table(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user logs in as an admin",
  "keyword": "When "
});
formatter.match({
  "location": "Login_StepDefinition.user_logs_in_as_an_admin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Admin\" module",
  "keyword": "Then "
});
formatter.match({
  "location": "UserManagement_StepDefinition.user_clicks_on_module(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user hovers on \"Qualifications\" submodule",
  "keyword": "Given "
});
formatter.match({
  "location": "UserManagement_StepDefinition.user_hovers_on_submodule(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Skills\" submodule",
  "keyword": "Then "
});
formatter.match({
  "location": "UserManagement_StepDefinition.user_clicks_on_submodule(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "admin can be able to add person with description",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@skills"
    },
    {
      "name": "@ADDSKILLS"
    }
  ]
});
formatter.step({
  "name": "admin clicks add button",
  "keyword": "When "
});
formatter.match({
  "location": "Skills_StepDefinition.admin_clicks_add_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin adds an employee with \"Rapunzel\" and it\u0027s \"3 Years Experience\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Skills_StepDefinition.admin_adds_an_employee_with_and_it_s(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin clicks the save button",
  "keyword": "Then "
});
formatter.match({
  "location": "Skills_StepDefinition.admin_clicks_the_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin verifies that \"Rapunzel\" and \"3 Years Experience\" are displayed in the Skills table",
  "keyword": "And "
});
formatter.match({
  "location": "Skills_StepDefinition.admin_verifies_that_and_are_displayed_in_the_Skills_table(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user logs in as an admin",
  "keyword": "When "
});
formatter.match({
  "location": "Login_StepDefinition.user_logs_in_as_an_admin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Admin\" module",
  "keyword": "Then "
});
formatter.match({
  "location": "UserManagement_StepDefinition.user_clicks_on_module(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user hovers on \"Qualifications\" submodule",
  "keyword": "Given "
});
formatter.match({
  "location": "UserManagement_StepDefinition.user_hovers_on_submodule(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Skills\" submodule",
  "keyword": "Then "
});
formatter.match({
  "location": "UserManagement_StepDefinition.user_clicks_on_submodule(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "admin can be able to add person with description",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@skills"
    },
    {
      "name": "@ADDSKILLS"
    }
  ]
});
formatter.step({
  "name": "admin clicks add button",
  "keyword": "When "
});
formatter.match({
  "location": "Skills_StepDefinition.admin_clicks_add_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin adds an employee with \"Heidi\" and it\u0027s \"1 Year Experience\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Skills_StepDefinition.admin_adds_an_employee_with_and_it_s(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin clicks the save button",
  "keyword": "Then "
});
formatter.match({
  "location": "Skills_StepDefinition.admin_clicks_the_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin verifies that \"Heidi\" and \"1 Year Experience\" are displayed in the Skills table",
  "keyword": "And "
});
formatter.match({
  "location": "Skills_StepDefinition.admin_verifies_that_and_are_displayed_in_the_Skills_table(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user logs in as an admin",
  "keyword": "When "
});
formatter.match({
  "location": "Login_StepDefinition.user_logs_in_as_an_admin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Admin\" module",
  "keyword": "Then "
});
formatter.match({
  "location": "UserManagement_StepDefinition.user_clicks_on_module(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user hovers on \"Qualifications\" submodule",
  "keyword": "Given "
});
formatter.match({
  "location": "UserManagement_StepDefinition.user_hovers_on_submodule(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Skills\" submodule",
  "keyword": "Then "
});
formatter.match({
  "location": "UserManagement_StepDefinition.user_clicks_on_submodule(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "admin can be able to add person with description",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@skills"
    },
    {
      "name": "@ADDSKILLS"
    }
  ]
});
formatter.step({
  "name": "admin clicks add button",
  "keyword": "When "
});
formatter.match({
  "location": "Skills_StepDefinition.admin_clicks_add_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin adds an employee with \"Sirinler\" and it\u0027s \"4 Year Experience\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Skills_StepDefinition.admin_adds_an_employee_with_and_it_s(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin clicks the save button",
  "keyword": "Then "
});
formatter.match({
  "location": "Skills_StepDefinition.admin_clicks_the_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin verifies that \"Sirinler\" and \"4 Year Experience\" are displayed in the Skills table",
  "keyword": "And "
});
formatter.match({
  "location": "Skills_StepDefinition.admin_verifies_that_and_are_displayed_in_the_Skills_table(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user logs in as an admin",
  "keyword": "When "
});
formatter.match({
  "location": "Login_StepDefinition.user_logs_in_as_an_admin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Admin\" module",
  "keyword": "Then "
});
formatter.match({
  "location": "UserManagement_StepDefinition.user_clicks_on_module(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user hovers on \"Qualifications\" submodule",
  "keyword": "Given "
});
formatter.match({
  "location": "UserManagement_StepDefinition.user_hovers_on_submodule(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Skills\" submodule",
  "keyword": "Then "
});
formatter.match({
  "location": "UserManagement_StepDefinition.user_clicks_on_submodule(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "admin can be able to add person with description",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@skills"
    },
    {
      "name": "@ADDSKILLS"
    }
  ]
});
formatter.step({
  "name": "admin clicks add button",
  "keyword": "When "
});
formatter.match({
  "location": "Skills_StepDefinition.admin_clicks_add_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin adds an employee with \"Kirmizi Kiz\" and it\u0027s \"2 Year Experience\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Skills_StepDefinition.admin_adds_an_employee_with_and_it_s(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin clicks the save button",
  "keyword": "Then "
});
formatter.match({
  "location": "Skills_StepDefinition.admin_clicks_the_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin verifies that \"Kirmizi Kiz\" and \"2 Year Experience\" are displayed in the Skills table",
  "keyword": "And "
});
formatter.match({
  "location": "Skills_StepDefinition.admin_verifies_that_and_are_displayed_in_the_Skills_table(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user logs in as an admin",
  "keyword": "When "
});
formatter.match({
  "location": "Login_StepDefinition.user_logs_in_as_an_admin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Admin\" module",
  "keyword": "Then "
});
formatter.match({
  "location": "UserManagement_StepDefinition.user_clicks_on_module(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user hovers on \"Qualifications\" submodule",
  "keyword": "Given "
});
formatter.match({
  "location": "UserManagement_StepDefinition.user_hovers_on_submodule(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Skills\" submodule",
  "keyword": "Then "
});
formatter.match({
  "location": "UserManagement_StepDefinition.user_clicks_on_submodule(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "admin can be able to add person with description",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@skills"
    },
    {
      "name": "@ADDSKILLS"
    }
  ]
});
formatter.step({
  "name": "admin clicks add button",
  "keyword": "When "
});
formatter.match({
  "location": "Skills_StepDefinition.admin_clicks_add_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin adds an employee with \"Ali Baba\" and it\u0027s \"10 Year Experience\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Skills_StepDefinition.admin_adds_an_employee_with_and_it_s(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin clicks the save button",
  "keyword": "Then "
});
formatter.match({
  "location": "Skills_StepDefinition.admin_clicks_the_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin verifies that \"Ali Baba\" and \"10 Year Experience\" are displayed in the Skills table",
  "keyword": "And "
});
formatter.match({
  "location": "Skills_StepDefinition.admin_verifies_that_and_are_displayed_in_the_Skills_table(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "admin can be able to delete employees information from the skills table",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@deleteEmployee"
    }
  ]
});
formatter.step({
  "name": "admin clicks on \"\u003cemployees checkbox\u003e\" from the skills table",
  "keyword": "When "
});
formatter.step({
  "name": "admin clicks on delete button",
  "keyword": "Then "
});
formatter.step({
  "name": "admin verifies that \"\u003cemployees checkbox\u003e\" is not displayed in the skills table",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "employees checkbox"
      ]
    },
    {
      "cells": [
        "Heidi"
      ]
    },
    {
      "cells": [
        "Yedi Cuceler"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user logs in as an admin",
  "keyword": "When "
});
formatter.match({
  "location": "Login_StepDefinition.user_logs_in_as_an_admin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Admin\" module",
  "keyword": "Then "
});
formatter.match({
  "location": "UserManagement_StepDefinition.user_clicks_on_module(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user hovers on \"Qualifications\" submodule",
  "keyword": "Given "
});
formatter.match({
  "location": "UserManagement_StepDefinition.user_hovers_on_submodule(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Skills\" submodule",
  "keyword": "Then "
});
formatter.match({
  "location": "UserManagement_StepDefinition.user_clicks_on_submodule(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "admin can be able to delete employees information from the skills table",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@skills"
    },
    {
      "name": "@deleteEmployee"
    }
  ]
});
formatter.step({
  "name": "admin clicks on \"Heidi\" from the skills table",
  "keyword": "When "
});
formatter.match({
  "location": "Skills_StepDefinition.admin_clicks_on_from_the_skills_table(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin clicks on delete button",
  "keyword": "Then "
});
formatter.match({
  "location": "Skills_StepDefinition.admin_clicks_on_delete_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin verifies that \"Heidi\" is not displayed in the skills table",
  "keyword": "And "
});
formatter.match({
  "location": "Skills_StepDefinition.admin_verifies_that_is_not_displayed_in_the_skills_table(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user logs in as an admin",
  "keyword": "When "
});
formatter.match({
  "location": "Login_StepDefinition.user_logs_in_as_an_admin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Admin\" module",
  "keyword": "Then "
});
formatter.match({
  "location": "UserManagement_StepDefinition.user_clicks_on_module(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user hovers on \"Qualifications\" submodule",
  "keyword": "Given "
});
formatter.match({
  "location": "UserManagement_StepDefinition.user_hovers_on_submodule(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Skills\" submodule",
  "keyword": "Then "
});
formatter.match({
  "location": "UserManagement_StepDefinition.user_clicks_on_submodule(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "admin can be able to delete employees information from the skills table",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@skills"
    },
    {
      "name": "@deleteEmployee"
    }
  ]
});
formatter.step({
  "name": "admin clicks on \"Yedi Cuceler\" from the skills table",
  "keyword": "When "
});
formatter.match({
  "location": "Skills_StepDefinition.admin_clicks_on_from_the_skills_table(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin clicks on delete button",
  "keyword": "Then "
});
formatter.match({
  "location": "Skills_StepDefinition.admin_clicks_on_delete_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin verifies that \"Yedi Cuceler\" is not displayed in the skills table",
  "keyword": "And "
});
formatter.match({
  "location": "Skills_StepDefinition.admin_verifies_that_is_not_displayed_in_the_skills_table(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user logs in as an admin",
  "keyword": "When "
});
formatter.match({
  "location": "Login_StepDefinition.user_logs_in_as_an_admin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Admin\" module",
  "keyword": "Then "
});
formatter.match({
  "location": "UserManagement_StepDefinition.user_clicks_on_module(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user hovers on \"Qualifications\" submodule",
  "keyword": "Given "
});
formatter.match({
  "location": "UserManagement_StepDefinition.user_hovers_on_submodule(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Skills\" submodule",
  "keyword": "Then "
});
formatter.match({
  "location": "UserManagement_StepDefinition.user_clicks_on_submodule(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "admin can be able to check all employees\u0027 checkBox",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@skills"
    },
    {
      "name": "@selectAllEmployees"
    }
  ]
});
formatter.step({
  "name": "admin clicks all checkbox  on the Skills table",
  "keyword": "When "
});
formatter.match({
  "location": "Skills_StepDefinition.admin_clicks_all_checkbox_on_the_Skills_table()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin verifies that all name of employees is selected",
  "keyword": "Then "
});
formatter.match({
  "location": "Skills_StepDefinition.admin_verifies_that_all_name_of_employees_is_selected()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user logs in as an admin",
  "keyword": "When "
});
formatter.match({
  "location": "Login_StepDefinition.user_logs_in_as_an_admin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Admin\" module",
  "keyword": "Then "
});
formatter.match({
  "location": "UserManagement_StepDefinition.user_clicks_on_module(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user hovers on \"Qualifications\" submodule",
  "keyword": "Given "
});
formatter.match({
  "location": "UserManagement_StepDefinition.user_hovers_on_submodule(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Skills\" submodule",
  "keyword": "Then "
});
formatter.match({
  "location": "UserManagement_StepDefinition.user_clicks_on_submodule(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "admin can be able to unselect all employees checkbox on the skill table",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@skills"
    },
    {
      "name": "@unselectedAllEMployees"
    }
  ]
});
formatter.step({
  "name": "admin clicks all checkbox to unselect all employees",
  "keyword": "When "
});
formatter.match({
  "location": "Skills_StepDefinition.admin_clicks_all_checkbox_to_unselect_all_employees()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin verifies that all names are unselected",
  "keyword": "Then "
});
formatter.match({
  "location": "Skills_StepDefinition.admin_verifies_that_all_names_are_unselected()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user logs in as an admin",
  "keyword": "When "
});
formatter.match({
  "location": "Login_StepDefinition.user_logs_in_as_an_admin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Admin\" module",
  "keyword": "Then "
});
formatter.match({
  "location": "UserManagement_StepDefinition.user_clicks_on_module(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user hovers on \"Qualifications\" submodule",
  "keyword": "Given "
});
formatter.match({
  "location": "UserManagement_StepDefinition.user_hovers_on_submodule(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Skills\" submodule",
  "keyword": "Then "
});
formatter.match({
  "location": "UserManagement_StepDefinition.user_clicks_on_submodule(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "admin can be able to unselect specific checkbox on skill table",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@skills"
    },
    {
      "name": "@unSelectOneCheckBox"
    }
  ]
});
formatter.step({
  "name": "admin clicks any checkbox",
  "keyword": "When "
});
formatter.match({
  "location": "Skills_StepDefinition.admin_clicks_any_checkbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin verifies that sprecific checkbox is unselected",
  "keyword": "Then "
});
formatter.match({
  "location": "Skills_StepDefinition.admin_verifies_that_sprecific_checkbox_is_unselected()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user logs in as an admin",
  "keyword": "When "
});
formatter.match({
  "location": "Login_StepDefinition.user_logs_in_as_an_admin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Admin\" module",
  "keyword": "Then "
});
formatter.match({
  "location": "UserManagement_StepDefinition.user_clicks_on_module(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user hovers on \"Qualifications\" submodule",
  "keyword": "Given "
});
formatter.match({
  "location": "UserManagement_StepDefinition.user_hovers_on_submodule(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Skills\" submodule",
  "keyword": "Then "
});
formatter.match({
  "location": "UserManagement_StepDefinition.user_clicks_on_submodule(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "admin can be able to delete employee information from the skills table",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@skills"
    },
    {
      "name": "@deleteAll"
    }
  ]
});
formatter.step({
  "name": "admin deletes employees from skills table by clicking select all checkbox",
  "keyword": "Then "
});
formatter.match({
  "location": "Skills_StepDefinition.admin_deletes_employees_from_skills_table_by_clicking_select_all_checkbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin verifies that all employees are deleted",
  "keyword": "And "
});
formatter.match({
  "location": "Skills_StepDefinition.admin_verifies_that_all_employees_are_deleted()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
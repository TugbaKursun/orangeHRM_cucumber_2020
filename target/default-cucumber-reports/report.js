$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Admin/UserManagement.feature");
formatter.feature({
  "name": "user management",
  "description": "",
  "keyword": "Feature"
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
formatter.scenario({
  "name": "user hovers on User Management",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@hovers"
    }
  ]
});
formatter.step({
  "name": "user hovers on \"User Management\" submodule",
  "keyword": "When "
});
formatter.match({
  "location": "UserManagement_StepDefinition.user_hovers_on_submodule(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user  verifies that \"Users\" submodule is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "UserManagement_StepDefinition.user_verifies_that_submodule_is_displayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
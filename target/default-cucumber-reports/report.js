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
  "status": "skipped"
});
formatter.step({
  "name": "user logs in as an admin",
  "keyword": "When "
});
formatter.match({
  "location": "Login_StepDefinition.user_logs_in_as_an_admin()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on \"Admin\" module",
  "keyword": "Then "
});
formatter.match({
  "location": "UserManagement_StepDefinition.user_clicks_on_module(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "sorting user name on employee list from the table on usermanagement page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sortAlphabetically"
    }
  ]
});
formatter.step({
  "name": "user hovers on \"User Management\" submodule",
  "keyword": "Given "
});
formatter.match({
  "location": "UserManagement_StepDefinition.user_hovers_on_submodule(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on \"Users\" submodule",
  "keyword": "Then "
});
formatter.match({
  "location": "UserManagement_StepDefinition.user_clicks_on_submodule(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on username triangle arrow",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user verify that user names are alphabetically ordered in the table",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "skipped"
});
});
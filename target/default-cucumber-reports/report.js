$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Login.feature");
formatter.feature({
  "name": "Login",
  "description": "  As an user I want to login with different credentials",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login as an admin",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Admin"
    },
    {
      "name": "@smoke"
    }
  ]
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
  "name": "user verifies that \"Dashboard\" page subtitle is displayed",
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
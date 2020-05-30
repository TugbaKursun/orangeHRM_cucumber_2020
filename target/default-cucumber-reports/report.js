$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Admin/UserManagement.feature");
formatter.feature({
  "name": "user management",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "admin can be able to search a user with \u003cusername\u003e and \u003cEmployeeName\u003e",
  "description": "                    then verifies \u003cEmployeeName\u003e on User Management page",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@searchUser"
    }
  ]
});
formatter.step({
  "name": "admin search Employee info by using  \"\u003cusername\u003e\" and \"\u003cEmployeeName\u003e\":",
  "keyword": "When "
});
formatter.step({
  "name": "admin verifies that employee name \"\u003cEmployeeName\u003e\" is displayed on User Management page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "EmployeeName"
      ]
    },
    {
      "cells": [
        "hannah.flores",
        "Hannah Flores"
      ]
    },
    {
      "cells": [
        "robert.craig",
        "Robert Craig"
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
formatter.scenario({
  "name": "admin can be able to search a user with hannah.flores and Hannah Flores",
  "description": "                    then verifies \u003cEmployeeName\u003e on User Management page",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@searchUser"
    }
  ]
});
formatter.step({
  "name": "admin search Employee info by using  \"hannah.flores\" and \"Hannah Flores\":",
  "keyword": "When "
});
formatter.match({
  "location": "UserManagement_StepDefinition.admin_search_Employee_info_by_using_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin verifies that employee name \"Hannah Flores\" is displayed on User Management page",
  "keyword": "Then "
});
formatter.match({
  "location": "UserManagement_StepDefinition.admin_verifies_that_employee_name_is_displayed_on_User_Management_page(String)"
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
formatter.scenario({
  "name": "admin can be able to search a user with robert.craig and Robert Craig",
  "description": "                    then verifies \u003cEmployeeName\u003e on User Management page",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@searchUser"
    }
  ]
});
formatter.step({
  "name": "admin search Employee info by using  \"robert.craig\" and \"Robert Craig\":",
  "keyword": "When "
});
formatter.match({
  "location": "UserManagement_StepDefinition.admin_search_Employee_info_by_using_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin verifies that employee name \"Robert Craig\" is displayed on User Management page",
  "keyword": "Then "
});
formatter.match({
  "location": "UserManagement_StepDefinition.admin_verifies_that_employee_name_is_displayed_on_User_Management_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
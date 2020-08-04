$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Admin/Organization/GeneralInformation.feature");
formatter.feature({
  "name": "User should able to edit general information page",
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
formatter.step({
  "name": "user hovers on \"Organization\" submodule",
  "keyword": "Given "
});
formatter.match({
  "location": "UserManagement_StepDefinition.user_hovers_on_submodule(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"General Information\" submodule",
  "keyword": "Then "
});
formatter.match({
  "location": "UserManagement_StepDefinition.user_clicks_on_submodule(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "fill out the organization info and edit",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@editGeneralInfo"
    }
  ]
});
formatter.step({
  "name": "user clicks on the edit button",
  "keyword": "Given "
});
formatter.match({
  "location": "GeneralInformation_StepDefinition.user_clicks_on_the_edit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters following information:",
  "rows": [
    {
      "cells": [
        "organization name",
        "OrangeTech"
      ]
    },
    {
      "cells": [
        "phone",
        "9656714567"
      ]
    },
    {
      "cells": [
        "email",
        "orange@gamil.com"
      ]
    },
    {
      "cells": [
        "address",
        "Orange street ln"
      ]
    },
    {
      "cells": [
        "city",
        "California"
      ]
    },
    {
      "cells": [
        "zip",
        "78787"
      ]
    },
    {
      "cells": [
        "note",
        "Orange HRM Software"
      ]
    },
    {
      "cells": [
        "taxId",
        "12837575"
      ]
    },
    {
      "cells": [
        "registration number",
        "A23456"
      ]
    },
    {
      "cells": [
        "fax",
        "orange@gamil.com"
      ]
    },
    {
      "cells": [
        "address2",
        "address"
      ]
    },
    {
      "cells": [
        "state",
        "NJ"
      ]
    },
    {
      "cells": [
        "country",
        "US"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "GeneralInformation_StepDefinition.user_enters_following_information(String,String\u003e)"
});
formatter.result({
  "error_message": "java.lang.IllegalArgumentException: Keys to send should be a not null CharSequence\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:97)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\n\tat com.sun.proxy.$Proxy20.sendKeys(Unknown Source)\n\tat com.orangeHRM.step_definitions.Admin_StepDefinitions.organization_StepDefinitions.GeneralInformation_StepDefinition.user_enters_following_information(GeneralInformation_StepDefinition.java:42)\n\tat ✽.user enters following information:(file:src/test/resources/features/Admin/Organization/GeneralInformation.feature:20)\n",
  "status": "failed"
});
formatter.step({
  "name": "user clicks on the save button",
  "keyword": "And "
});
formatter.match({
  "location": "GeneralInformation_StepDefinition.user_clicks_on_the_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user verifies that following information is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "GeneralInformation_StepDefinition.user_verifies_that_following_information_is_displayed(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
});
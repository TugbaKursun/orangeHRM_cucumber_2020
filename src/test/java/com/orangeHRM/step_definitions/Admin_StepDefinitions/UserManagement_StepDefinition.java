package com.orangeHRM.step_definitions.Admin_StepDefinitions;

import com.orangeHRM.pages.AdminPages.UserManagementPage;
import com.orangeHRM.utilities.BrowserUtils;
import io.cucumber.java.en.*;
import org.junit.Assert;

public class UserManagement_StepDefinition {

    UserManagementPage userManagementPage = new UserManagementPage();

    @Then("user clicks on {string} module")
    public void user_clicks_on_module(String Module) {
    userManagementPage.navigateTo(Module);

    }

    @When("user hovers on {string} submodule")
    public void user_hovers_on_submodule(String subModuleName) {
    userManagementPage.hoverOnSubModule(subModuleName);

    }

    @Then("user  verifies that {string} submodule is displayed")
    public void user_verifies_that_submodule_is_displayed(String subModuleName) {

        Assert.assertTrue(userManagementPage.usersSubModule.isDisplayed());



    }


}

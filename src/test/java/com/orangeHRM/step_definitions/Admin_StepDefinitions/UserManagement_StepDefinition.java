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

    @When("admin search Employee info by using  {string} and {string}:")
    public void admin_search_Employee_info_by_using_and(String userName, String employeeName) {
        userManagementPage.searchUser(userName,employeeName);
        BrowserUtils.waitFor(5);
    }

    @Then("admin verifies that employee name {string} is displayed on User Management page")
    public void admin_verifies_that_employee_name_is_displayed_on_User_Management_page(String employeeName) {
       Assert.assertTrue(BrowserUtils.getListOfString(userManagementPage.employeeNames).contains(employeeName));
        BrowserUtils.waitFor(5);
        System.out.println(BrowserUtils.getListOfString(userManagementPage.employeeNames));
    }




}

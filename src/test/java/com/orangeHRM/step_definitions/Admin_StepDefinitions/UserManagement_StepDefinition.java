package com.orangeHRM.step_definitions.Admin_StepDefinitions;

import com.orangeHRM.pages.AdminPages.UserManagementPage;
import com.orangeHRM.utilities.BrowserUtils;
import io.cucumber.java.en.*;
import org.apache.http.util.Asserts;
import org.junit.Assert;
import org.openqa.selenium.WebElement;

import java.util.*;

public class UserManagement_StepDefinition {

    UserManagementPage userManagementPage = new UserManagementPage();

    int size =0;
    List<String> usernameList = new ArrayList<>();


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

    //admin can be able to search a user with <username> and <EmployeeName>
    //then verifies <EmployeeName> on User Management page
    @When("admin search Employee info by using  {string} and {string}:")
    public void admin_search_Employee_info_by_using_and(String userName, String employeeName) {
        userManagementPage.getTableSize();
        userManagementPage.searchUser(userName,employeeName);
        BrowserUtils.waitFor(5);
    }

    @Then("admin verifies that employee name {string} is displayed on User Management page")
    public void admin_verifies_that_employee_name_is_displayed_on_User_Management_page(String employeeName) {
       Assert.assertTrue(BrowserUtils.getListOfString(userManagementPage.employeeNames).contains(employeeName));
        BrowserUtils.waitFor(5);
        System.out.println(BrowserUtils.getListOfString(userManagementPage.employeeNames));
    }

    //admin can be able to reset the search user box
    @Then("user clicks on {string} submodule")
    public void user_clicks_on_submodule(String subModule) {
        userManagementPage.clickSubModule(subModule);
        size = userManagementPage.getTableSize();
    }

    @When("admin clicks the reset button")
    public void admin_clicks_the_reset_button() {
        System.out.println("Table size is " + size);
        userManagementPage.resetButton.click();
    }
    @Then("admin verifies that row size is equal to expected size")
    public void admin_verifies_that_row_size_is_equal_to_expected_size() {

        Assert.assertEquals(size,userManagementPage.getTableSize());
        System.out.println("Expected size is " + size + ",  actual size is " +
                            userManagementPage.getTableSize());
    }

    //admin can be able to close user search table by clicking triangle
    // icon on the right of the top page
    @When("admin clicks on the triangle icon")
    public void admin_clicks_on_the_triangle_icon() {

        userManagementPage.clickTriangleIcon();
    }

    @Then("current table should disappear")
    public void current_table_should_disappear() {
        String expected = "toggle tiptip activated";
        String actual = userManagementPage.triangleIcon.getAttribute("class");
        Assert.assertEquals(expected,actual);
        System.out.println("Actual value is " + actual);
    }

    // verifying that all username boxes is selected
    @When("user clicks on user list check box")
    public void user_clicks_on_user_list_check_box() {
        userManagementPage.usernameCheckBoxAll.click();
    }

    @Then("all list should be selected")
    public void all_list_should_be_selected() {

        for(WebElement checkBox : userManagementPage.checkboxes){
            Assert.assertTrue("Check box is not selected",checkBox.isSelected());
            System.out.println("Checkbox value is : " +checkBox.getAttribute("value"));

           }
        System.out.println("Checkbox list  size is : " +userManagementPage.checkboxes.size());
        }


   //checking each boxes is selected

    @When("user clicks on username check box from the list")
    public void user_clicks_on_username_check_box_from_the_list() {

        userManagementPage.secondUserFromList.click();
        BrowserUtils.waitFor(5);
    }

    @Then("verify that username check box is selected")
    public void verify_that_username_check_box_is_selected() {
     Assert.assertTrue("Checkbox is not selected!",
             userManagementPage.secondUserFromList.isSelected());
    }

    @Then("user clicks on username in order to unchecked  from the list")
    public void user_clicks_on_username_in_order_to_unchecked_from_the_list() {
        userManagementPage.secondUserFromList.click();
        BrowserUtils.waitFor(5);
    }

    @Then("verify that username check box is unselected")
    public void verify_that_username_check_box_is_unselected() {
     Assert.assertFalse("Checkbox is selected!",
             userManagementPage.secondUserFromList.isSelected());
    }


   //select employee list, uncheck one employee then verify allcheckbox is unselected
    @When("user clicks on {string} check box in order to make unselected")
    public void user_clicks_on_check_box_in_order_to_make_unselected(String value) {
        userManagementPage.clickSingleCheckBox(value);
    }

    @When("verify that all-checkbox and {string} checkbox are unselected")
    public void verify_that_all_checkbox_and_checkbox_are_unselected(String value) {
     Assert.assertFalse("All-checkbox is still selected!",userManagementPage.usernameCheckBoxAll.isSelected());
     Assert.assertFalse(value + " Checkbox is still selected!",userManagementPage.singleChecbox(value).isSelected());
    }


    //sorting user name on employee list from the table on usermanagement page
    @When("user clicks on username triangle arrow")
    public void user_clicks_on_username_triangle_arrow() {
        usernameList.addAll(BrowserUtils.getListOfString(userManagementPage.userNames));
        BrowserUtils.doubleClick(userManagementPage.triangleArrowUsername);

    }

    @Then("user verify that user names are alphabetically ordered in the table")
    public void user_verify_that_user_names_are_alphabetically_ordered_in_the_table() {
       /** List<String> newList = new ArrayList<>();
        newList.addAll(BrowserUtils.getListOfString(userManagementPage.userNames));
        Iterator it = newList.iterator();

       while(it.hasNext()) {

            Assert.assertTrue(usernameList[i].equals(newList[i]));
*/

//      List<String> newList = new ArrayList<String>((Collection<? extends String>) Collections.singletonList(BrowserUtils.getListOfString(userManagementPage.userNames)));
//
//      for(String each:newList){
//          for(String eachUsername: usernameList) {
//
//              Assert.assertTrue("The employee table is not alphabetically ordered",each.equals(eachUsername));
//
//          //  }

        }





}

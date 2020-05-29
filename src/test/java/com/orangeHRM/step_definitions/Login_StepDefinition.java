package com.orangeHRM.step_definitions;
import com.orangeHRM.pages.LoginPage;
import com.orangeHRM.utilities.BrowserUtils;
import com.orangeHRM.utilities.ConfigurationReader;
import com.orangeHRM.utilities.Driver;
import io.cucumber.java.en.*;
import org.junit.Assert;

public class Login_StepDefinition {

    LoginPage loginPage = new LoginPage();

    @When("user logs in as an admin")
    public void user_logs_in_as_an_admin() {
    Driver.getDriver().get(ConfigurationReader.getProperty("url"));
    loginPage.login();

    }

    @Then("user verifies that {string} page name is displayed")
    public void user_verifies_that_page_name_is_displayed(String string) {
        Assert.assertEquals(string,loginPage.getText(loginPage.userIcon));
    }




}

package com.orangeHRM.step_definitions.Admin_StepDefinitions.organization_StepDefinitions;

import com.orangeHRM.pages.AdminPages.organization.GeneralInformationPage;
import io.cucumber.java.en.*;
import org.junit.Assert;

import java.util.Map;

public class GeneralInformation_StepDefinition {
    GeneralInformationPage generalInformationPage = new GeneralInformationPage();
    @Given("user clicks on the edit button")
    public void user_clicks_on_the_edit_button() {
        generalInformationPage.clickEditButton();

    }

    @Then("user enters {string} as a organization name")
    public void user_enters_as_a_organization_name(String organizationName) {
        generalInformationPage.setOrganizationName(organizationName);
    }

    @Then("user clicks on the save button")
    public void user_clicks_on_the_save_button() {
        generalInformationPage.clickEditButton();
    }

    @Then("user verifies that {string} message pops up on the top")
    public void user_verifies_that_message_pops_up_on_the_top(String message) {
        Assert.assertEquals(message,generalInformationPage.getSuccessfulMessage());
    }

    @Then("user enters following information:")
    public void user_enters_following_information(Map<String,String> dataTable) {
       generalInformationPage.setOrganizationName(dataTable.get("organization name"));
       generalInformationPage.phoneInput.sendKeys(dataTable.get("phone"));
       generalInformationPage.emailInput.sendKeys(dataTable.get("email"));
       generalInformationPage.addressInput.sendKeys(dataTable.get("address"));
       generalInformationPage.cityInput.sendKeys(dataTable.get("city"));
       generalInformationPage.zipInput.sendKeys(dataTable.get("zip"));
       generalInformationPage.noteInput.sendKeys(dataTable.get("note"));
       generalInformationPage.taxIdInput.sendKeys(dataTable.get("taxId"));
       generalInformationPage.registrationNumberInput.sendKeys(dataTable.get("registration number "));
       generalInformationPage.faxInput.sendKeys(dataTable.get("fax"));
       generalInformationPage.address2Input.sendKeys(dataTable.get("address2"));
       generalInformationPage.stateInput.sendKeys(dataTable.get("state"));
       generalInformationPage.selectCountry(dataTable.get("country"));

    }

    @Then("user verifies that following information is displayed")
    public void user_verifies_that_following_information_is_displayed(Map<String,String> dataTable) {


    }
}

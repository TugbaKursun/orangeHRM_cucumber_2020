package com.orangeHRM.step_definitions.Admin_StepDefinitions.Qualifications;

import com.orangeHRM.pages.AdminPages.Qualifications.SkillsPage;
import com.orangeHRM.utilities.BrowserUtils;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebElement;

public class Skills_StepDefinition {
    SkillsPage skillsPage = new SkillsPage();

    @When("admin clicks add button")
    public void admin_clicks_add_button() {
       skillsPage.clickAddButton();
    }

    @When("admin adds an employee with {string} and it's {string}")
    public void admin_adds_an_employee_with_and_it_s(String name, String description) {

        skillsPage.addEmployementSkills(name, description);
    }

    @Then("admin clicks the save button")
    public void admin_clicks_the_save_button() {
        skillsPage.saveSkill.click();
    }
    @Then("admin verifies that {string} and {string} are displayed in the Skills table")
    public void admin_verifies_that_and_are_displayed_in_the_Skills_table(String name, String description) throws InterruptedException {

        System.out.println(BrowserUtils.getListOfString(skillsPage.nameOfSkillWebElement));
        System.out.println(skillsPage.descriptionOfSkillWebElement);
       Assert.assertTrue(BrowserUtils.getListOfString(skillsPage.nameOfSkillWebElement).contains(name));
       Assert.assertTrue(BrowserUtils.getListOfString(skillsPage.descriptionOfSkillWebElement).contains(description));
    }



    @When("admin clicks on {string} from the skills table")
    public void admin_clicks_on_from_the_skills_table(String name) throws InterruptedException{
        skillsPage.selectSpecificCheckBox(name);
    }

    @Then("admin clicks on delete button")
    public void admin_clicks_on_delete_button() {
       skillsPage.deleteSkill.click();

    }

    @Then("admin verifies that {string} is not displayed in the skills table")
    public void admin_verifies_that_is_not_displayed_in_the_skills_table(String name) {
        System.out.println(BrowserUtils.getListOfString(skillsPage.nameOfSkillWebElement));
        Assert.assertFalse(BrowserUtils.getListOfString(skillsPage.nameOfSkillWebElement).contains(name));
    }
//##########################################

    //selectAllEmployees
    @When("admin clicks all checkbox  on the Skills table")
    public void admin_clicks_all_checkbox_on_the_Skills_table() {
        skillsPage.clickAllCheckBox();
    }

    @Then("admin verifies that all name of employees is selected")
    public void admin_verifies_that_all_name_of_employees_is_selected() throws InterruptedException {

        for (WebElement checkbox : skillsPage.allcheckBoxes) {
            Thread.sleep(5000);
            Assert.assertTrue("Check box is not selected",checkbox.isSelected());
            System.out.println("Checkbox list size is : " + skillsPage.allcheckBoxes.size());
            System.out.println("Checkbox value is : "+ checkbox.getAttribute("value"));
        }
    }

    //unselectALL
    @When("admin clicks all checkbox to unselect all employees")
    public void admin_clicks_all_checkbox_to_unselect_all_employees()throws InterruptedException {
    skillsPage.unselectALlCheckbox();
    }

    @Then("admin verifies that all names are unselected")
    public void admin_verifies_that_all_names_are_unselected() {
        for (WebElement checkbox : skillsPage.allcheckBoxes) {
            Assert.assertFalse("Check box is selected", (checkbox.isSelected()));
            System.out.println("Checkbox list size is : " + skillsPage.allcheckBoxes.size());
            System.out.println("Checkbox value is : " + checkbox.getAttribute("value"));

        }
    }
    //unselect one employee
    @When("admin clicks any checkbox")
    public void admin_clicks_any_checkbox() throws InterruptedException{
        skillsPage.unselectSpecificChekBox("Ali Baba");
    }

    @Then("admin verifies that sprecific checkbox is unselected")
    public void admin_verifies_that_sprecific_checkbox_is_unselected() {
       Assert.assertFalse("checkbox is still selected",skillsPage.getspecificCheckBox("Ali Baba").isSelected());
    }
    @Then("admin deletes employees from skills table by clicking select all checkbox")
    public void admin_deletes_employees_from_skills_table_by_clicking_select_all_checkbox() throws InterruptedException {
        Thread.sleep(3000);
        skillsPage.checkAll.click();
        skillsPage.deleteSkill.click();
    }
    @Then("admin verifies that all employees are deleted")
    public void admin_verifies_that_all_employees_are_deleted() {
        //expected,actual
        Assert.assertEquals("No Records Found",skillsPage.noRecordsMessage.getText().trim());
    }
}

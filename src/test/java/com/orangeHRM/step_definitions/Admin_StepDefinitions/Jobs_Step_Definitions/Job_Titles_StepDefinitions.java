package com.orangeHRM.step_definitions.Admin_StepDefinitions.Jobs_Step_Definitions;

import com.orangeHRM.pages.AdminPages.Jobs.JobTitlesPage;
import com.orangeHRM.utilities.BrowserUtils;
import com.orangeHRM.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.List;

public class Job_Titles_StepDefinitions {

    JobTitlesPage jobTitlesPage = new JobTitlesPage();

    @Given("user clicks on the add button")
    public void user_clicks_on_the_add_button() {
        jobTitlesPage.add.click();
    }

    @Then("user enters job title {string} as a job title input")
    public void user_enters_job_title_as_a_job_title_input(String jobtitle) {
        jobTitlesPage.jobtitleinput(jobtitle);
    }

    @Then("user clicks on the save button")
    public void user_clicks_on_the_save_button() {

        jobTitlesPage.clickSaveButton();
    }
//after add(SDET) do assertion
    @Then("user verify that list of job titles contains {string} job title")
    public void user_verify_that_list_of_job_titles_contains_job_title(String exp) {
       Assert.assertTrue(BrowserUtils.getListOfString(jobTitlesPage.jobTitleList).contains(exp));
        }





//edit job title
        @Given("user clicks on the job title name")
        public void user_clicks_on_the_job_title_name_button () {
            jobTitlesPage.jobTitle("Account Clerk");

        }

        @Given("user clicks on the edit button")
        public void user_clicks_on_the_edit_button () {
            jobTitlesPage.clickEditButton();
        }

        @Then("user enters {string} as a job title name")
        public void user_enters_as_a_job_title_name (String string){
            jobTitlesPage.setnewJobTitle(string);


            //   Assert.assertTrue(jobTitlesPage.titles.contains(string));

        }

    }




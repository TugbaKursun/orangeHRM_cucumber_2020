package com.orangeHRM.pages.AdminPages.Jobs;
import com.orangeHRM.pages.BasePage;

import com.orangeHRM.utilities.BrowserUtils;
import com.orangeHRM.utilities.Driver;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.List;


public class PayGradesPage extends BasePage {
  //  JobTitlesPage jobtitle = new JobTitlesPage();

    public void jobTitle(String titles){
        String locator = "//a[text()='"+titles +"']";
        WebElement title = Driver.getDriver().findElement(By.xpath(locator));
        BrowserUtils.waitForClickablility(title,8);
        title.click();
    }


// uncheck spec employee checkbox
//public void WebElement getspecificCheckBox(String name){
//        String locator = "";
//        WebElement check = Driver.getDriver().findElement(By.xpath(locator));
//        return check;
//    }
//
//Assert.assertFalse("check is still selected", skillsPage.getspecchec("Alibaba").isSelected);

}

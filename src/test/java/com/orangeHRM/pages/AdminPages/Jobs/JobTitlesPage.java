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

public class JobTitlesPage extends BasePage {
    @FindBy(name="btnAdd")
    public WebElement add;

    @FindBy(xpath="//input[@name='btnDelete']")
    public WebElement delete;


    @FindBy (xpath = "//tbody/tr/td[2]/a")
    public List<WebElement> jobTitleList;


    @FindBy(name = "chkSelectAll")
    public WebElement jobtitleCheckBoxAll;

    @FindBy(xpath = "//input[@id='jobTitle_jobTitle']")
    public WebElement jobtitleinput;

    @FindBy(xpath = "//input[@id='btnSave'][@name='btnSave']")
    public WebElement savebutton;

    @FindBy(id = "btnSave")
    public WebElement editbutton;

    @FindBy(name = "jobTitle[jobTitle]")
    public WebElement setJobTitle;



//her bir job title i click etmek istedigimizde
    public void jobTitle(String titles){
        String locator = "//a[text()='"+titles +"']";
        WebElement title = Driver.getDriver().findElement(By.xpath(locator));
        BrowserUtils.waitForClickablility(title,8);
        title.click();
    }



    public void clickJobCheckBox( String jobcheckbox){
        String locator = "//input[@type='" + jobcheckbox + "']" ;
        WebElement checkbox = Driver.getDriver().findElement(By.xpath(locator));
        BrowserUtils.waitForClickablility(checkbox,5);
        checkbox.click();
    }


    public void jobtitleinput( String jobtitle){
        jobtitleinput.sendKeys(jobtitle);
        BrowserUtils.waitForVisibility(jobtitleinput,5);
        savebutton.click();
    }
// SOR BU METHOD DOGRUMU?
    public void jobaddassertion(String exp) {
        List<WebElement> Jtitle = Driver.getDriver().findElements(By.xpath("//tbody/tr/td[2]/a"));
        for (WebElement webElement : Jtitle) {
            String name = webElement.getText();
            if (name == "SDET")
                System.out.println(name);
           //  Assert.assertTrue(jobTitlesPage.titles.contains(string));
          //  BrowserUtils.verifyEquals("SDET", name);
        }
    }


 //EDIT
public void clickEditButton(){
    WebDriverWait wait = new WebDriverWait(Driver.getDriver(),10);
    wait.until(ExpectedConditions.elementToBeClickable(editbutton));
    editbutton.click();

}

public void setnewJobTitle(String name){
    WebDriverWait wait = new WebDriverWait(Driver.getDriver(),10);
    wait.until(ExpectedConditions.visibilityOf(setJobTitle));
    setJobTitle.clear();
    setJobTitle.sendKeys("QA Engineer");


    // setJobTitle.getText();
    // System.out.println(setJobTitle);
    jobTitleList.contains("QA Engineer");
}

public void clickSaveButton(){
    WebDriverWait wait = new WebDriverWait(Driver.getDriver(), 15);
    wait.until(ExpectedConditions.elementToBeClickable(savebutton));
    savebutton.click();
}
}


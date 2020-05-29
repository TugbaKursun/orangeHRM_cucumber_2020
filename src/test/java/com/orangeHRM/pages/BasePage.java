package com.orangeHRM.pages;

import com.orangeHRM.utilities.BrowserUtils;
import com.orangeHRM.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;


public abstract class  BasePage {

    public BasePage() {

        PageFactory.initElements(Driver.getDriver(), this);
    }



    public void navigateTo(String moduleName){
        String locator = "//b[text()='"+moduleName+"']";
        WebElement module = Driver.getDriver().findElement(By.xpath(locator));
        WebDriverWait wait = new WebDriverWait(Driver.getDriver(),10);
        wait.until(ExpectedConditions.elementToBeClickable(module));
        module.click();
    }


    public void hoverOnSubModule ( String subModuleName){
        String locator = "//a[text()='"+subModuleName +"']";
        WebElement subModule = Driver.getDriver().findElement(By.xpath(locator));
        BrowserUtils.waitForVisibility(subModule,5);

        Actions action = new Actions(Driver.getDriver());
        action.moveToElement(subModule).perform();

    }

    public void clickSubModule (String subModuleName){
     String locator = "//a[text()='"+subModuleName +"']";
     WebElement subModule = Driver.getDriver().findElement(By.xpath(locator));
     BrowserUtils.waitForClickablility(subModule,5);
     subModule.click();
    }



}

package com.orangeHRM.pages;

import com.orangeHRM.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
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






}

package com.orangeHRM.pages.AdminPages.organization;

import com.orangeHRM.pages.BasePage;
import com.orangeHRM.utilities.Driver;
import io.cucumber.java.en_lol.WEN;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

public class GeneralInformationPage extends BasePage {

    @FindBy(id = "btnSaveGenInfo")
    public WebElement editButton;

    @FindBy(name = "organization[name]")
    public WebElement organizationName;

    @FindBy(id = "successBodyEdit")
    public WebElement hiddenSuccessMessage;

    @FindBy(id = "organization_phone")
    public WebElement phoneInput;

    @FindBy(id = "organization_email")
    public WebElement emailInput;

    @FindBy(xpath = "//input[@id='organization_street1']")
    public  WebElement addressInput;

    @FindBy(xpath = "//input[@id='organization_city']")
    public WebElement cityInput;

    @FindBy(xpath = "//input[@id='organization_zipCode']")
    public WebElement zipInput;

    @FindBy(tagName = "textarea")
    public WebElement noteInput;

    @FindBy(xpath = "//input[@id='organization_taxId']")
    public WebElement taxIdInput;

    @FindBy(xpath = "//input[@name='organization[registraionNumber]']")
    public WebElement registrationNumberInput;

    @FindBy(xpath = "//input[@id='organization_fax']")
    public WebElement faxInput;

    @FindBy(xpath = "//input[@id='organization_street2']")
    public WebElement address2Input;

    @FindBy(xpath = "//input[@id='organization_province']")
    public WebElement stateInput;

    @FindBy(xpath = "//select[@id='organization_country']")
    public WebElement countryInput;



    public void clickEditButton(){
        WebDriverWait wait = new WebDriverWait(Driver.getDriver(),10);
        wait.until(ExpectedConditions.elementToBeClickable(editButton));
        editButton.click();
    }
    public void setOrganizationName(String name){
        WebDriverWait wait = new WebDriverWait(Driver.getDriver(),10);
        wait.until(ExpectedConditions.visibilityOf(organizationName));
        organizationName.clear();
        organizationName.sendKeys(name);
    }

    public String getSuccessfulMessage(){
        JavascriptExecutor js = (JavascriptExecutor)Driver.getDriver();
        String message =  (String)js.executeScript("return document.getElementById('successBodyEdit').innerHTML");
        return message.trim();
    }

    public void selectCountry(String value){
        Select select = new Select(countryInput);
        select.selectByValue(value);
    }

}

package com.orangeHRM.pages;

import com.orangeHRM.utilities.ConfigurationReader;
import com.orangeHRM.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage extends BasePage {


   public LoginPage(){
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy (xpath = "//input[@id='txtUsername']")
    public WebElement userNameBox;

    @FindBy (xpath = "//input[@id='txtPassword']")
    public WebElement passowrdBox;

   @FindBy (id = "btnLogin")
    public WebElement loginButton;

   @FindBy (xpath = "//a[@id='welcome']")
   public WebElement userIcon;

   public void login(){
       String adminUsername = ConfigurationReader.getProperty("adminUserName");
       String adminPassword = ConfigurationReader.getProperty("adminPassword");
       userNameBox.sendKeys(adminUsername);
       passowrdBox.sendKeys(adminPassword);
       loginButton.click();
   }

   public String getText(WebElement element){
       return element.getText();
   }
}

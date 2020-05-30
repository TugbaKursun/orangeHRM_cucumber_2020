package com.orangeHRM.pages.AdminPages;

import com.orangeHRM.pages.BasePage;
import com.orangeHRM.utilities.BrowserUtils;
import com.orangeHRM.utilities.Driver;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class UserManagementPage extends BasePage {


    @FindBy(id = "menu_admin_viewSystemUsers")
    public WebElement usersSubModule;

    @FindBy(id= "searchBtn")
    public WebElement searchButton;

    @FindBy(id = "searchSystemUser_userName")
    public WebElement userNameBox;

   @FindBy(id = "searchSystemUser_employeeName_empName")
   public WebElement employeeNameBox;

   @FindBy(xpath = "//tbody/tr/td[4]")
   public List<WebElement> employeeNames;

    public void searchUser( String userName, String employeeName){

        userNameBox.sendKeys(userName);
        employeeNameBox.sendKeys(employeeName);
        BrowserUtils.waitForClickablility(searchButton,5);
        searchButton.click();
    }

    public void verifyUserNameAfterSearch(String userName){
        String locator = "//a[@text()='" + userName + " ']";
        WebElement userNameVerification = Driver.getDriver().findElement(By.xpath(locator));
        Assert.assertEquals(userName,userNameVerification.getText());
    }
/*
ODEV : search, reset and triangle icon verification
**/


}

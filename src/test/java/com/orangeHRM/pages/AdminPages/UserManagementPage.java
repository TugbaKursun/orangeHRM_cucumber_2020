package com.orangeHRM.pages.AdminPages;

import com.orangeHRM.pages.BasePage;
import com.orangeHRM.utilities.BrowserUtils;
import com.orangeHRM.utilities.Driver;
import io.cucumber.java.en.*;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

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

   @FindBy (xpath = "//tbody/tr/td[2]/a")
   public List<WebElement> userNames;

   @FindBy(id = "resetBtn")
   public WebElement resetButton;

   @FindBy(xpath = "//div[@id='systemUser-information']/a")
   public WebElement triangleIcon;

   @FindBy(name = "chkSelectAll")
   public WebElement usernameCheckBoxAll;

   @FindBy (xpath = "//tbody/tr/td/input")
   public List<WebElement> checkboxes;

   @FindBy (xpath = "//tbody/tr[3]/td/input")
   public WebElement secondUserFromList;

   @FindBy ( className = "header headerSortDown")
   public WebElement triangleArrowUsername;

   @FindBy (xpath = "//a[text() ='Employee Name']")
   public WebElement triangleArrowEmployeename;



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

    public int getTableSize(){
        return BrowserUtils.getListOfString(employeeNames).size();
    }

    public void clickTriangleIcon(){
        WebDriverWait wait = new WebDriverWait(Driver.getDriver(),5);
        wait.until(ExpectedConditions.elementToBeClickable(triangleIcon));
        triangleIcon.click();
    }

    public void clickSingleCheckBox( String value){
        String locator = "//input[@value='" + value + "']" ;
        WebElement checkbox = Driver.getDriver().findElement(By.xpath(locator));
        BrowserUtils.waitForClickablility(checkbox,5);
        checkbox.click();
    }

    public WebElement singleChecbox(String value){

        return Driver.getDriver().findElement(By.xpath("//input[@value='" + value + "']" ));
    }


}

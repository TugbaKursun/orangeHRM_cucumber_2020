package com.orangeHRM.pages.AdminPages;

import com.orangeHRM.pages.BasePage;
import com.orangeHRM.utilities.BrowserUtils;
import com.orangeHRM.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;

public class UserManagementPage extends BasePage {


    @FindBy(id = "menu_admin_viewSystemUsers")
    public WebElement usersSubModule;




}

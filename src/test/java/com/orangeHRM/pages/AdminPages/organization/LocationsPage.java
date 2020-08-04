package com.orangeHRM.pages.AdminPages.organization;

import com.orangeHRM.pages.BasePage;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class LocationsPage extends BasePage {

    @FindBy(id = "searchLocation_name")
    public WebElement locationNameInput;

    @FindBy(id= "searchLocation_city")
    public WebElement citySearchInput;

    @FindBy(id = "searchLocation_country")
    public WebElement countrySearchSelect;

    @FindBy(id = "btnSearch")
    public WebElement searchButton;

    @FindBy(id = "btnReset")
    public WebElement resetButton;

    @FindBy(id = "btnAdd")
    public WebElement addButton;

    @FindBy(id = "btnDelete")
    public WebElement deleteButton;













}

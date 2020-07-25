package com.orangeHRM.pages.AdminPages.Qualifications;

import com.orangeHRM.pages.BasePage;
import com.orangeHRM.utilities.Driver;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.List;

public class SkillsPage extends BasePage {

    @FindBy(css = "#menu_admin_viewSkills")
    public WebElement skillsSubModule;

    @FindBy(css = "#btnAdd")
    public WebElement addBtn;

    @FindBy(css = "#skill_name")
    public WebElement nameSkill;

    @FindBy(css = "#skill_description")
    public WebElement descriptionSkill;

    @FindBy(css = "#btnSave")
    public WebElement saveSkill;

    @FindBy(css = "#btnCancel")
    public WebElement cancelSkill;


    @FindBy(id = "btnDel")
    public WebElement deleteSkill;

    @FindBy(css = "#checkAll")
    public WebElement checkAll;

    @FindBy(xpath = "//tbody/tr/td[2]/a")
    public List<WebElement> nameOfSkillWebElement;

    @FindBy(xpath = "//tbody/tr/td[3]")
    public List<WebElement> descriptionOfSkillWebElement;

    @FindBy(xpath = "//td[normalize-space()='No Records Found']")
    public WebElement noRecordsMessage;

    @FindBy(id = "checkAll")
    public WebElement checkAllEmployee;

    @FindBy(xpath = "//tbody/tr/td/input")
    public List<WebElement> allcheckBoxes;



    //in order to check skills box
    public void checkBoxSkill(int num){
        String locator = "//input[@value=' " + num + " ']";
        WebElement checkBox = Driver.getDriver().findElement(By.xpath(locator));
        boolean isCheckBoxNotSelected = !checkBox.isSelected();
//        if  isCheckBoxNotSelected == true{
////            checkBox.click();
////        }

    }

    //click allcheckbox
    public void clickAllCheckBox(){
        WebDriverWait wait = new WebDriverWait(Driver.getDriver(),10);
        wait.until(ExpectedConditions.elementToBeClickable(checkAll));
        checkAll.click();
    }

    //unselect all checkbox
    public void unselectALlCheckbox() throws InterruptedException {

        Thread.sleep(5000);
        if(!checkAll.isSelected()) {
            checkAll.click();
            checkAll.click();
        }else{
                checkAll.click();
            }
        }

    public void clickAddButton(){
        WebDriverWait wait = new WebDriverWait(Driver.getDriver(), 10);
        wait.until(ExpectedConditions.elementToBeClickable(addBtn));
        addBtn.click();
    }

    public void addEmployementSkills(String name, String description){

        nameSkill.sendKeys(name);
        descriptionSkill.sendKeys(description);
    }

    public void selectSpecificCheckBox(String name)throws InterruptedException{
        String locator= "//a[text()='"+ name + "']/parent::td/preceding-sibling::td/input";
        Thread.sleep(5000);
        WebElement checkbox = Driver.getDriver().findElement(By.xpath(locator));
        WebDriverWait wait = new WebDriverWait(Driver.getDriver(), 10);
        wait.until(ExpectedConditions.visibilityOf(checkbox));
        checkbox.click();
    }

    public  WebElement getspecificCheckBox(String name){
        String locator= "//a[text()='"+ name + "']/parent::td/preceding-sibling::td/input";
        WebElement check = Driver.getDriver().findElement(By.xpath(locator));
        return check;
    }


    //unselect sapecific employee checkbox
    public void unselectSpecificChekBox(String name) throws InterruptedException{
        if (!checkAll.isSelected()){
            checkAll.click();
        }
        selectSpecificCheckBox(name);
    }


}

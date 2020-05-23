package com.orangeHRM.step_definitions;

import com.orangeHRM.utilities.ConfigurationReader;
import com.orangeHRM.utilities.Driver;
import io.cucumber.core.api.Scenario;
import io.cucumber.java.*;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.apache.log4j.Logger;

public class Hook {

    private static Logger logger = Logger.getLogger(Hook.class);

        //default HOOK runs for any scenario
        @Before
        public void setup() {
            logger.info("##############################");
            logger.info("Test setup!");
            if (!ConfigurationReader.getProperty("browser").contains("remote")) {
                Driver.getDriver().manage().window().maximize();

            }
        }


        @After
        public void teardown(Scenario scenario){
            if(scenario.isFailed()){
                TakesScreenshot takesScreenshot = (TakesScreenshot) Driver.getDriver();
                byte[] image = takesScreenshot.getScreenshotAs(OutputType.BYTES);
                //will attach screenshot into report
                scenario.embed(image, "image/png");
            }
            Driver.closeDriver();
            System.out.println("AFTER");
        }



    }

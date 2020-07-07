package com.orangeHRM.runners;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;


@RunWith(Cucumber.class)
    @CucumberOptions(

            tags = "@sortAlphabetically",
            features = "src/test/resources/features/",
            glue = "com/orangeHRM/step_definitions",
            dryRun =true,

            plugin =
                    {"json:target/cucumber.json",
                     "html:target/default-cucumber-reports",
                     "rerun:target/rerun.txt"}


    )
    public class CukesRunner {
}

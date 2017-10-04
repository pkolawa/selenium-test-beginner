#Create all needed objects
const selenium = require("selenium-webdriver");
const By = selenium.By;
const driver = new selenium.Builder().forBrowser("chrome").build();


driver.get(process.env.URL);

const locators = {
    form: By.id("schedule"),
	input: By.name("#schedule input[name='name']")
};

function addAnotherText(inputText){
	driver.findElement(locators.input).sendKeys(inputText);
	driver.findElement(locators.form).submit();
}

addAnotherText("Another text");
addAnotherText("And another text");

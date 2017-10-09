# Bringing By only for the object
const By = require("selenium-webdriver").By;

class HomePage{
    constructor(driver){
        this.driver = driver;
        this.locators = {
        	form: By.id("schedule"),
        	input: By.name("#schedule input[name='name']"),
            itemButton: checkbox => By.xpath(`//span[text() = "${checkbox}"]/../button[last()]`)
        };
    }

    #Method when opening the page
    open(){
        this.driver.get(process.env.URL);
    }

    clickItem(checkbox){
        this.driver.findElement(this.locators.itemButton(checkbox)).click();
    }

    addAnotherText(inputText){
    	this.driver.findElement(this.locators.input).sendKeys(inputText);
    	this.driver.findElement(this.locators.form).submit();
    }
}

module.exports = HomePage;

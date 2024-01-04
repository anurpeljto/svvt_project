import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";


import { readFileSync } from "fs";
import * as path from "path";
const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));




export class RegisterPage extends BasePage {
    private firstName = By.id("customer.firstName");
    private lastName = By.id("customer.lastName");
    private address = By.id("customer.address.street");
    private city = By.id("customer.address.city");
    private state = By.id("customer.address.state");
    private zip = By.id("customer.address.zipCode");
    private phoneNumber = By.id("customer.phoneNumber");
    private ssn = By.id("customer.ssn");
    private username = By.id("customer.username");
    private password = By.id("customer.password");
    private confirmPassword = By.id("repeatedPassword");
    private regButton = By.xpath('//*[@id="customerForm"]/table/tbody/tr[13]/td[2]/input');
    
    constructor(driver: WebDriver) {
        super(driver);
    }

    async enterFirstName(){
        await this.fillInputField(this.firstName, "John");
    }

    async enterLastName(){
        await this.fillInputField(this.lastName, "Doe");
    }

    async enterAddress(){
        await this.fillInputField(this.address, "Stupska 5");
    }

    async enterCity(){
        await this.fillInputField(this.city, "Sarajevo");
    }

    async enterState(){
        await this.fillInputField(this.state, "Bosnia & Herzegovina");
    }

    async enterZip(){
        await this.fillInputField(this.zip, "71000");
    }

    async enterPhone(){
        await this.fillInputField(this.phoneNumber, "38762522421");
    }

    async enterSSN(){
        await this.fillInputField(this.ssn, "123456789");
    }

    async enterUserName(){
        await this.fillInputField(this.username, "kan");
    }

    async enterPassword(){
        await this.fillInputField(this.password, "burch123");
    }

    async repeatPassword(){
        await this.fillInputField(this.confirmPassword, "burch123");
    }

    async clickRegister(){
        await this.waitAndClick(this.regButton, 5000);
    }


}

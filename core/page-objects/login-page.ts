import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";


import { readFileSync } from "fs";
import * as path from "path";
const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));




export class LoginPage extends BasePage {
    private userName = By.xpath("//div[@id='loginPanel']//form//div[1]//input[@name='username']");
    private password = By.xpath("//div[@id='loginPanel']//form//div[2]//input[@name='password']");
    private submit = By.xpath("//div[@id='loginPanel']//form//div[3]//input[@type='submit']");
    private title = By.xpath('//*[@id="rightPanel"]/div/div/h1');

    async enterUserName(){
        await this.fillInputField(this.userName, testData.user.username);
    }

    async enterPassword(){
        await this.fillInputField(this.password, testData.user.password);
    }

    async pressSubmit(){
        await this.waitAndClick(this.submit, 5000);
    }

    async verifyRedirect(){
        await this.checkMatchingElements(this.title, testData.titles.accounts);
    }


}

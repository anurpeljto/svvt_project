import { Builder, By, WebDriver } from "selenium-webdriver";
import  BasePage  from "../core/page-objects/base-page";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";
import { LoginPage } from "../core/page-objects/login-page";


const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));


let driver: WebDriver;
let logPage: LoginPage;


beforeAll(async () => {
    driver = await createDriver(testData.url.login);
    logPage = new LoginPage(driver);
},30000);


test("log in", async () => {
   //write tests here
   await logPage.enterUserName();
   await logPage.enterPassword();
   await logPage.pressSubmit();
   await logPage.verifyRedirect();
   

},15000);


afterAll(async () => {
    await quitDriver(driver);
},20000);
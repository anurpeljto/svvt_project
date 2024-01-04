import { Builder, By, WebDriver } from "selenium-webdriver";
import  BasePage  from "../core/page-objects/base-page";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";
import { RegisterPage } from "../core/page-objects/register-page";


const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));


let driver: WebDriver;
let regPage: RegisterPage;


beforeAll(async () => {
    driver = await createDriver(testData.url.register);
    regPage = new RegisterPage(driver);
},30000);


test("register", async () => {
   //write tests here
   await regPage.enterFirstName();
   driver.sleep(1000);
   await regPage.enterLastName();
   driver.sleep(1000);
   await regPage.enterAddress();
   driver.sleep(1000);
   await regPage.enterCity();
   driver.sleep(1000);
   await regPage.enterState();
   driver.sleep(1000);
   await regPage.enterZip();
   driver.sleep(1000);
   await regPage.enterPhone();
   driver.sleep(1000);
   await regPage.enterSSN();
   driver.sleep(1000);
   await regPage.enterUserName();
   driver.sleep(1000);
   await regPage.enterPassword();
   driver.sleep(1000);
   await regPage.repeatPassword();
   driver.sleep(1000);
   await regPage.clickRegister();

   
},10000);


afterAll(async () => {
    await quitDriver(driver);
},20000);
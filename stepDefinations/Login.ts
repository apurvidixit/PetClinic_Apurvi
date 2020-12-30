import { Given, When, Then } from "cucumber";
import { LoginPageObjects } from "../pageObjects/LoginPageObjects";
import { browser, by, element, ElementFinder, protractor } from "protractor";
import testdata from "../testdata/userData";
const expect = global['chai'].expect;
var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(50 * 1000);

let logObj = new LoginPageObjects();

Given('User will navigate to Petclinic url', async function () {
    await browser.get(testdata.userData.loginUrl.url);
    await browser.sleep(1000);
});

Then('User should able to see Welcome to Petclinic message', async function () {
    await logObj.WelcomeMsg.isDisplayed().then(async function (result) {
        await expect(true).to.equal(result);
    });
});
Then('User should able to see title of the webpage', async function () {
    let title = await browser.getTitle();
    console.log("WebPage Title is " + title);
    await expect("SpringPetclinicAngular").to.equal(title);
});

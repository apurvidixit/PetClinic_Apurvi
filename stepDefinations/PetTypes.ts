import { Given, When, Then } from "cucumber";
import { LoginPageObjects } from "../pageObjects/LoginPageObjects";
import { HomePageObjects } from "../pageObjects/HomePageObjects";
import { browser, by, element, ElementFinder, protractor } from "protractor"
import TestData from "../TestData/userData";
import { PetTypesPageObjects } from "../pageObjects/PetTypesPageObjects";


const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(70 * 1000);

let HomeObj = new HomePageObjects();
let logObj = new LoginPageObjects();
let petTypesObj = new PetTypesPageObjects();

When('User clicks on PetTypes tab', async function () {
    await HomeObj.PetTypes.click();
    await console.log("User clicks");
    // console.log(" PageTitle as : " + petTypesObj.pageTitle.getAttribute("innerText"));
    // console.log(" Name as : " + petTypesObj.Name.getAttribute("innerText"));
});

Then('Pet Types title should be displayed', async function () {
    let pageTitle = await petTypesObj.pageTitle.getText();
    await console.log(" PageTitle as : " + pageTitle);
    await expect("Pet Types").to.equal(pageTitle);
});

Given('User is on PetTypes tab page', async function () {
    await petTypesObj.pageTitle.isDisplayed().then(async function (result) {
        await expect(true).to.equal(result);
    });
});

Then('name field should be displayed', async function () {
    let nameField = await petTypesObj.Name.getText();
    await console.log(" Name Field : " + nameField);
    await expect("Name").to.equal(nameField);
    browser.sleep(5000);
});

Then('On Pet Types page Add & Home button texts should be displayed', async function () {
    let addButton = await petTypesObj.addButton.getText();
    let HomeButton = await petTypesObj.HomeButton.getText();
    await console.log(" Add Button : " + addButton);
    await console.log(" Home Button : " + HomeButton);
    await expect("Add").to.equal(addButton);
    await expect("Home").to.equal(HomeButton);
});

When('User clicks on Add button on that page', async function () {
    await petTypesObj.addButton.click();
    console.log("Add Button clicked");
});

When('User give pet name {string} in text field and clicks submit', async function (string) {
    await petTypesObj.nameTextbox.sendKeys(string);
    await petTypesObj.saveButton.click();
});
Then('User should be navigate on PetTypes page and added pet name should be displayed at last', async function () {
    let pagename = await petTypesObj.pageTitle.getText();
    await console.log("page name is : " + pagename);
});

/*When('User clicks on Add Button & give some pet name in text field and clicks submit', async function () {
    await petTypesObj.addButton.click();
    console.log("Add Button clicked");
    await petTypesObj.nameTextbox.sendKeys("Mouse");
    console.log("Pet type Mouse typed in a textbox");
    await petTypesObj.saveButton.click();
    console.log(" Save Button clicked");
   browser.sleep(7000);
});


Then('Pet name should be successfully added & should be disply in a table', async function () {
    let listEntry = await petTypesObj.listEntry.getText();
    await console.log(" listEntry : " + listEntry);
    await expect("Mouse").to.equal(listEntry);
});

When('User clicks on Deleted button tab', async function () {
    await HomeObj.PetTypes.click();
    await console.log("User clicks");
    // console.log(" PageTitle as : " + petTypesObj.pageTitle.getAttribute("innerText"));
    // console.log(" Name as : " + petTypesObj.Name.getAttribute("innerText"));
});

Then('Pet Types title should be displayed', async function () {
    let pageTitle = await petTypesObj.pageTitle.getText();
    await console.log(" PageTitle as : " + pageTitle);
    await expect("Pet Types").to.equal(pageTitle);
});*/
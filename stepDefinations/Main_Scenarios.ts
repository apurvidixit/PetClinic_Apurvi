import { Given, When, Then } from "cucumber";
import { HomePageObjects } from "../pageObjects/HomePage";
import { Veterinarian } from "../pageObjects/Veterinarian";
import { browser, by, element, ElementFinder, protractor } from "protractor"
import { newOwnerPageObject } from "../pageObjects/newOwnerPage";
import testdata from "../testdata/userData";

const expect = global['chai'].expect;

var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(70 * 1000);

let HomeObj = new HomePageObjects();
let vetObj = new Veterinarian();
let newOwnerObj = new newOwnerPageObject();

var until = protractor.ExpectedConditions;




Given('User is on Owners tab', async function () {
    let Owners = await HomeObj.Owners.getAttribute("innerText");
    console.log(" Tab name is : " + Owners);
    await expect("OWNERS").to.equal(Owners);
});


Then('Owners list should be displayed', async function () {
    let page = await HomeObj.PageName.getText();
    console.log(" page name is : " + page);

});
Given('User is on All Owners list page', async function () {
    let pagename = await HomeObj.PageName.getText();
    console.log("page name is : " + pagename);
});

Then('Add New Owner page should be displayed', async function () {
    await HomeObj.PageName.isDisplayed().then(async function (result) {
        await expect(true).to.equal(result);
    });
    let pagename = await HomeObj.PageName.getText();
    console.log("page name is : " + pagename);
});
When('User clicks on ADD NEW sub-menu', async function () {
    await HomeObj.AddNewOwner.click();
});
Then('New Owner page should get displayed', async function () {
    await HomeObj.PageName.isDisplayed().then(async function (result) {
        await expect(true).to.equal(result);
    });
});


Then('ALL and ADD NEW owners sub-menus should be displayed', async function () {
    let firstMenu = await HomeObj.AllOwners.getText();
    await expect("ALL").to.equal(firstMenu);
    console.log("first drop-down menue is : " + firstMenu);

    let secondMenu = await HomeObj.AddNewOwner.getText();
    await expect("ADD NEW").to.equal(secondMenu);
    console.log("second drop-down menue is : " + secondMenu);
});

When('User clicks on Peter McTavish', async function () {
    let count = await newOwnerObj.OwnerList.all(by.tagName("tr")).count();
    console.log(count);

    for (let i = 1; i <= count; i++) {
        let owners = await element(by.xpath("//*[@class='table table-striped']/tbody/tr[" + i + "]/td/a")).getAttribute("innerText");
        console.log(owners);
        if (owners == "Peter McTavish") {
            await element(by.xpath("//*[@class='table table-striped']/tbody/tr[" + i + "]/td/a")).click();
            await browser.wait(until.presenceOf(newOwnerObj.OwnerInfoTable), 20000, 'Element is not present');
            break;
        }
    }
});

When('User enter valid {string} {string} {string} {string} {string}', async function (string, string2, string3, string4, string5) {
    await newOwnerObj.FirstName.sendKeys(string);
    await newOwnerObj.LastName.sendKeys(string2);
    await newOwnerObj.Address.sendKeys(string3);
    await newOwnerObj.City.sendKeys(string4);
    await newOwnerObj.Telephone.sendKeys(string5);

});


Given('User is on New Owner page', async function () {
    let pagename = await HomeObj.PageName.getText();
    console.log("page name is : " + pagename);
});





Then('User should be navigate on Owners page and added owner should be displayed at last', async function () {

    await browser.wait(until.visibilityOf(HomeObj.PageName), 20000, 'Taking too long to load');
    let pagename = await HomeObj.PageName.getText();
    console.log("page name : " + pagename);
    await browser.refresh();
    await browser.wait(until.visibilityOf(newOwnerObj.OwnerList), 20000, 'Taking too long to load');
    let ownerDetails = await newOwnerObj.OwnerList.all(by.tagName("tr")).last();
    await browser.actions().mouseMove(ownerDetails).perform();
    let owner_Name = await ownerDetails.getText();
    await browser.wait(until.elementToBeClickable(ownerDetails), 20000, 'Element taking too long to appear in the DOM');
    console.log("Added owner details : " + owner_Name);
    await expect(testdata.userData.OwnerData.OwnerDetail).to.equal(owner_Name);

});




When('User clicks on Add Owner button on New Owner page', async function () {
    await vetObj.clickAddOwners();
});

When('User enter valid First Name, Last Name, Address, City, Telephone', async function () {
    await vetObj.enterAllDetailsOwner();
});

Then('User should see Pet Details for Peter McTavish', async function () {
    await vetObj.petDetailsForPeterMcTavish();
});

Given('User clicks on veterinarians', async function () {
    await vetObj.clickVeterian();
});

When('User clicks on ALL veterinarians', async function () {
    await vetObj.clickVeterianAll();
});

Then('Number of radiology veterinarians will display', async function () {
    await vetObj.numberOfRadiologyVeterinarians();
});

Given('User is on Petclinic home page', async function () {
    await vetObj.petClinicHomePage();
});

When('User clicks on owners tab', async function () {
    await vetObj.clickOwners();
});

When('User clicks on Add Owner button', async function () {
    await vetObj.clickOnAddOwnerButton();
});

When('User clicks on ALL sub-menu', async function () {
    await vetObj.clickOnAllOwnerSubMenu();
});
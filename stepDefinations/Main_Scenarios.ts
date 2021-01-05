import { Given, When, Then } from "cucumber";
import { Veterinarian } from "../pageObjects/Veterinarian";
import { browser, by, element, ElementFinder, protractor } from "protractor"
const expect = global['chai'].expect;
var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(70 * 1000);
var until = protractor.ExpectedConditions;

let vetObj = new Veterinarian();

Then('New Owner page should get displayed', async function () {
   await vetObj.checkNewOwnerPageText();
});

When('User enter valid {string} {string} {string} {string} {string}', async function (string, string2, string3, string4, string5) {
    await vetObj.FirstName.sendKeys(string);
    await vetObj.LastName.sendKeys(string2);
    await vetObj.Address.sendKeys(string3);
    await vetObj.City.sendKeys(string4);
    await vetObj.Telephone.sendKeys(string5);
});

Given('User is on Owners tab', async function () {
    await vetObj.ownerTabText();
});
Then('Owners list should be displayed', async function () {
    await vetObj.checkOwnerList();
});
When('User clicks on ADD NEW sub-menu', async function () {
    await vetObj.clickAddNewOwner();
});

Then('ALL and ADD NEW owners sub-menus should be displayed', async function () {
    await vetObj.checkAll_AddNewOwner();
});

Given('User is on New Owner page', async function () {
    await vetObj.checkNewOwnerPage();
});

When('User clicks on Peter McTavish', async function () {
    await vetObj.clickPeterMcTavish();
});

Then('Added owner should be displayed after navigating to Owners page', async function () {
    await vetObj.checkAddedOwner();
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
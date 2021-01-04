import { Given, When, Then } from "cucumber";
import { LoginPageObjects } from "../pageObjects/LoginPageObjects";
import { HomePageObjects } from "../pageObjects/HomePageObjects";
import { VeterinariansObjects } from "../pageObjects/VeterinariansObjects";
import { browser, by, element, ElementFinder, protractor } from "protractor"
import TestData from "../TestData/userData";
import { newOwnerPageObject } from "../pageObjects/newOwnerPageObjects";
import testdata from "../testdata/userData";

const expect = global['chai'].expect;

var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(70 * 1000);

let HomeObj = new HomePageObjects();
let logObj = new LoginPageObjects();
let vetObj = new VeterinariansObjects();
let newOwnerObj = new newOwnerPageObject();

var until = protractor.ExpectedConditions;


Given('User is on Petclinic home page', async function () {
    await logObj.WelcomeMsg.isDisplayed().then(async function (result) {
        await expect(true).to.equal(result);
    });
});

When('User clicks on owners tab', async function () {
    await HomeObj.Owners.click();
});


Given('User is on Owners tab', async function () {
    let Owners = await HomeObj.Owners.getAttribute("innerText");
    console.log(" Tab name is : " + Owners);
    await expect("OWNERS").to.equal(Owners);
});
When('User clicks on ALL sub-menu', async function () {
    await HomeObj.AllOwners.click();
    await browser.sleep(2000);
});

Then('Owners list should be displayed', async function () {
    // await HomeObj.OwnerList.isDisplayed().then(async function (result) {
    //     await expect(true).to.equal(result);
    // });
    await browser.sleep(2000);
    let page = await HomeObj.PageName.getText();
    console.log(" page name is : " + page);

});
Given('User is on All Owners list page', async function () {
    await browser.sleep(3000);
    let pagename = await HomeObj.PageName.getText();
    console.log("page name is : " + pagename);
});
When('User clicks on Add Owner button', async function () {
    await HomeObj.AddOwnerButton.click();
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
When('User enter valid First Name, Last Name, Address, City, Telephone', async function () {
    let firstName = testdata.userData.OwnerData.FirstName;
    await newOwnerObj.FirstName.sendKeys(firstName);

    let lastName = testdata.userData.OwnerData.LastName;
    await newOwnerObj.LastName.sendKeys(lastName);

    let address = testdata.userData.OwnerData.Address;
    await newOwnerObj.Address.sendKeys(address);

    let city = testdata.userData.OwnerData.City;
    await newOwnerObj.City.sendKeys(city);

    let telephone = testdata.userData.OwnerData.Telephone;
    await newOwnerObj.Telephone.sendKeys(telephone);
});



When('User clicks on Add Owner button on New Owner page', async function () {
    await newOwnerObj.AddOwnerButton.click();
});

Then('User should see Pet Details for Peter McTavish', async function () {
    let Petname = await newOwnerObj.PetName.getAttribute("innerText");
    console.log("Petname :  " + Petname);
    await expect(testdata.userData.PetDetails.Pet_Name).to.equal(Petname);

    let Petbirthdate = await newOwnerObj.Pet_birthdate.getAttribute("innerText");
    console.log("Pet BirthDate : " + Petbirthdate);
    await expect(testdata.userData.PetDetails.PetBday).to.equal(Petbirthdate);

    let PetType = await newOwnerObj.Pet_Type.getAttribute("innerText");
    console.log("Pet Type : " + PetType);
    await expect(testdata.userData.PetDetails.PetTypes).to.equal(PetType);

});

Given('User clicks on veterinarians', async function () {
    await browser.wait(until.elementToBeClickable(vetObj.Veterinarians), 20000, 'Element is not present');
    await vetObj.Veterinarians.click();
});

When('User clicks on ALL veterinarians', async function () {
    await browser.wait(until.elementToBeClickable(vetObj.vetAll), 20000, 'Element is not present');
    await vetObj.vetAll.click();
    let pagename = await vetObj.Pagename.getText();
    console.log("page name is : " + pagename);
});


Then('Number of radiology veterinarians will display', async function () {
 
    let specialties = "radiology";
    let spec = 0;
    await vetObj.vetListTableData.all(by.tagName("tr")).all(by.tagName("td")).each(async function (item) {
        await item!.getText().then(async function (result) {
            console.log(result);
            if (result.indexOf(specialties) >= 0) {
                spec = await spec + 1;
                console.log("Number of", specialties, "=", spec);
            }
        });
    });

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

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
    await console.log("page name is : " + pagename);
});


Then('Number of radiology veterinarians will display', async function () {
 
    let specialties = "radiology";
    let spec = 0;
    await vetObj.vetListTableData.all(by.tagName("tr")).all(by.tagName("td")).each(async function (item) {
        await item!.getText().then(async function (result) {
            await console.log(result);
            if (result.indexOf(specialties) >= 0) {
                spec = await spec + 1;
                await console.log("Number of", specialties, "=", spec);
            }
        });
    });

});

Then('User should be navigate on Owners page and added owner should be displayed at last', async function () {

    await browser.wait(until.visibilityOf(HomeObj.PageName), 20000, 'Taking too long to load');
    let pagename = await HomeObj.PageName.getText();
    await console.log("page name : " + pagename);
    await browser.refresh();
    await browser.wait(until.visibilityOf(newOwnerObj.OwnerList), 20000, 'Taking too long to load');
    let ownerDetails = await newOwnerObj.OwnerList.all(by.tagName("tr")).last();
    await browser.actions().mouseMove(ownerDetails).perform();
    let owner_Name = await ownerDetails.getText();
    await browser.wait(until.elementToBeClickable(ownerDetails), 20000, 'Element taking too long to appear in the DOM');
    await console.log("Added owner details : " + owner_Name);
    await expect(testdata.userData.OwnerData.OwnerDetail).to.equal(owner_Name);

});

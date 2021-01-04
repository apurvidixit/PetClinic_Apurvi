"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const LoginPage_1 = require("../pageObjects/LoginPage");
const HomePage_1 = require("../pageObjects/HomePage");
const Veterinarian_1 = require("../pageObjects/Veterinarian");
const protractor_1 = require("protractor");
const newOwnerPage_1 = require("../pageObjects/newOwnerPage");
const userData_1 = require("../testdata/userData");
const expect = global['chai'].expect;
var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(70 * 1000);
let HomeObj = new HomePage_1.HomePageObjects();
let logObj = new LoginPage_1.LoginPageObjects();
let vetObj = new Veterinarian_1.Veterinarian();
let newOwnerObj = new newOwnerPage_1.newOwnerPageObject();
var until = protractor_1.protractor.ExpectedConditions;
cucumber_1.Given('User is on Petclinic home page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield logObj.WelcomeMsg.isDisplayed().then(function (result) {
            return __awaiter(this, void 0, void 0, function* () {
                yield expect(true).to.equal(result);
            });
        });
    });
});
cucumber_1.When('User clicks on owners tab', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield HomeObj.Owners.click();
    });
});
cucumber_1.Given('User is on Owners tab', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let Owners = yield HomeObj.Owners.getAttribute("innerText");
        console.log(" Tab name is : " + Owners);
        yield expect("OWNERS").to.equal(Owners);
    });
});
cucumber_1.When('User clicks on ALL sub-menu', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield vetObj.clickOnAllOwnerSubMenu();
    });
});
cucumber_1.Then('Owners list should be displayed', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.sleep(2000);
        let page = yield HomeObj.PageName.getText();
        console.log(" page name is : " + page);
    });
});
cucumber_1.Given('User is on All Owners list page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.sleep(3000);
        let pagename = yield HomeObj.PageName.getText();
        console.log("page name is : " + pagename);
    });
});
cucumber_1.When('User clicks on Add Owner button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield vetObj.clickOnAddOwnerButton();
    });
});
cucumber_1.Then('Add New Owner page should be displayed', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield HomeObj.PageName.isDisplayed().then(function (result) {
            return __awaiter(this, void 0, void 0, function* () {
                yield expect(true).to.equal(result);
            });
        });
        let pagename = yield HomeObj.PageName.getText();
        console.log("page name is : " + pagename);
    });
});
cucumber_1.When('User clicks on ADD NEW sub-menu', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield HomeObj.AddNewOwner.click();
    });
});
cucumber_1.Then('New Owner page should get displayed', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield HomeObj.PageName.isDisplayed().then(function (result) {
            return __awaiter(this, void 0, void 0, function* () {
                yield expect(true).to.equal(result);
            });
        });
    });
});
cucumber_1.Then('ALL and ADD NEW owners sub-menus should be displayed', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let firstMenu = yield HomeObj.AllOwners.getText();
        yield expect("ALL").to.equal(firstMenu);
        console.log("first drop-down menue is : " + firstMenu);
        let secondMenu = yield HomeObj.AddNewOwner.getText();
        yield expect("ADD NEW").to.equal(secondMenu);
        console.log("second drop-down menue is : " + secondMenu);
    });
});
cucumber_1.When('User clicks on Peter McTavish', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let count = yield newOwnerObj.OwnerList.all(protractor_1.by.tagName("tr")).count();
        console.log(count);
        for (let i = 1; i <= count; i++) {
            let owners = yield protractor_1.element(protractor_1.by.xpath("//*[@class='table table-striped']/tbody/tr[" + i + "]/td/a")).getAttribute("innerText");
            console.log(owners);
            if (owners == "Peter McTavish") {
                yield protractor_1.element(protractor_1.by.xpath("//*[@class='table table-striped']/tbody/tr[" + i + "]/td/a")).click();
                yield protractor_1.browser.wait(until.presenceOf(newOwnerObj.OwnerInfoTable), 20000, 'Element is not present');
                break;
            }
        }
    });
});
cucumber_1.When('User enter valid {string} {string} {string} {string} {string}', function (string, string2, string3, string4, string5) {
    return __awaiter(this, void 0, void 0, function* () {
        yield newOwnerObj.FirstName.sendKeys(string);
        yield newOwnerObj.LastName.sendKeys(string2);
        yield newOwnerObj.Address.sendKeys(string3);
        yield newOwnerObj.City.sendKeys(string4);
        yield newOwnerObj.Telephone.sendKeys(string5);
    });
});
cucumber_1.Given('User is on New Owner page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let pagename = yield HomeObj.PageName.getText();
        console.log("page name is : " + pagename);
    });
});
cucumber_1.When('User enter valid First Name, Last Name, Address, City, Telephone', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let firstName = userData_1.default.userData.OwnerData.FirstName;
        yield newOwnerObj.FirstName.sendKeys(firstName);
        let lastName = userData_1.default.userData.OwnerData.LastName;
        yield newOwnerObj.LastName.sendKeys(lastName);
        let address = userData_1.default.userData.OwnerData.Address;
        yield newOwnerObj.Address.sendKeys(address);
        let city = userData_1.default.userData.OwnerData.City;
        yield newOwnerObj.City.sendKeys(city);
        let telephone = userData_1.default.userData.OwnerData.Telephone;
        yield newOwnerObj.Telephone.sendKeys(telephone);
    });
});
cucumber_1.When('User clicks on Add Owner button on New Owner page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield newOwnerObj.AddOwnerButton.click();
    });
});
cucumber_1.Then('User should see Pet Details for Peter McTavish', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield vetObj.petDetailsForPeterMcTavish();
    });
});
cucumber_1.Given('User clicks on veterinarians', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield vetObj.clickVeterian();
    });
});
cucumber_1.When('User clicks on ALL veterinarians', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield vetObj.clickVeterianAll();
    });
});
cucumber_1.Then('Number of radiology veterinarians will display', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield vetObj.numberOfRadiologyVeterinarians();
    });
});
cucumber_1.Then('User should be navigate on Owners page and added owner should be displayed at last', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.wait(until.visibilityOf(HomeObj.PageName), 20000, 'Taking too long to load');
        let pagename = yield HomeObj.PageName.getText();
        console.log("page name : " + pagename);
        yield protractor_1.browser.refresh();
        yield protractor_1.browser.wait(until.visibilityOf(newOwnerObj.OwnerList), 20000, 'Taking too long to load');
        let ownerDetails = yield newOwnerObj.OwnerList.all(protractor_1.by.tagName("tr")).last();
        yield protractor_1.browser.actions().mouseMove(ownerDetails).perform();
        let owner_Name = yield ownerDetails.getText();
        yield protractor_1.browser.wait(until.elementToBeClickable(ownerDetails), 20000, 'Element taking too long to appear in the DOM');
        console.log("Added owner details : " + owner_Name);
        yield expect(userData_1.default.userData.OwnerData.OwnerDetail).to.equal(owner_Name);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpbl9TY2VuYXJpb3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5hdGlvbnMvTWFpbl9TY2VuYXJpb3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNkM7QUFDN0Msd0RBQTREO0FBQzVELHNEQUEwRDtBQUMxRCw4REFBMkQ7QUFDM0QsMkNBQTRFO0FBQzVFLDhEQUFpRTtBQUNqRSxtREFBNEM7QUFFNUMsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUVyQyxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDaEQsaUJBQWlCLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0FBRTdCLElBQUksT0FBTyxHQUFHLElBQUksMEJBQWUsRUFBRSxDQUFDO0FBQ3BDLElBQUksTUFBTSxHQUFHLElBQUksNEJBQWdCLEVBQUUsQ0FBQztBQUNwQyxJQUFJLE1BQU0sR0FBRyxJQUFJLDJCQUFZLEVBQUUsQ0FBQztBQUNoQyxJQUFJLFdBQVcsR0FBRyxJQUFJLGlDQUFrQixFQUFFLENBQUM7QUFFM0MsSUFBSSxLQUFLLEdBQUcsdUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQztBQUcxQyxnQkFBSyxDQUFDLGdDQUFnQyxFQUFFOztRQUNwQyxNQUFNLE1BQU0sQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQWdCLE1BQU07O2dCQUM3RCxNQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3hDLENBQUM7U0FBQSxDQUFDLENBQUM7SUFDUCxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLDJCQUEyQixFQUFFOztRQUM5QixNQUFNLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7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
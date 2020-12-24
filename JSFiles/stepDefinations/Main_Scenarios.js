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
const LoginPageObjects_1 = require("../pageObjects/LoginPageObjects");
const HomePageObjects_1 = require("../pageObjects/HomePageObjects");
const VeterinariansObjects_1 = require("../pageObjects/VeterinariansObjects");
const protractor_1 = require("protractor");
const newOwnerPageObjects_1 = require("../pageObjects/newOwnerPageObjects");
const userData_1 = require("../testdata/userData");
const expect = global['chai'].expect;
var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(70 * 1000);
let HomeObj = new HomePageObjects_1.HomePageObjects();
let logObj = new LoginPageObjects_1.LoginPageObjects();
let vetObj = new VeterinariansObjects_1.VeterinariansObjects();
let newOwnerObj = new newOwnerPageObjects_1.newOwnerPageObject();
var until = protractor_1.protractor.ExpectedConditions;
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
cucumber_1.Then('User should see Pet Details for Peter McTavish', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let Petname = yield newOwnerObj.PetName.getAttribute("innerText");
        console.log("Petname :  " + Petname);
        yield expect(userData_1.default.userData.PetDetails.Pet_Name).to.equal(Petname);
        let Petbirthdate = yield newOwnerObj.Pet_birthdate.getAttribute("innerText");
        console.log("Pet BirthDate : " + Petbirthdate);
        yield expect(userData_1.default.userData.PetDetails.PetBday).to.equal(Petbirthdate);
        let PetType = yield newOwnerObj.Pet_Type.getAttribute("innerText");
        console.log("Pet Type : " + PetType);
        yield expect(userData_1.default.userData.PetDetails.PetTypes).to.equal(PetType);
    });
});
cucumber_1.Given('User clicks on veterinarians', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.wait(until.elementToBeClickable(vetObj.Veterinarians), 20000, 'Element is not present');
        yield vetObj.Veterinarians.click();
    });
});
cucumber_1.When('User clicks on ALL veterinarians', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.wait(until.elementToBeClickable(vetObj.vetAll), 20000, 'Element is not present');
        yield vetObj.vetAll.click();
        let pagename = yield vetObj.Pagename.getText();
        yield console.log("page name is : " + pagename);
    });
});
cucumber_1.Then('Number of radiology veterinarians will display', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let specialties = "radiology";
        let spec = 0;
        yield vetObj.vetListTableData.all(protractor_1.by.tagName("tr")).all(protractor_1.by.tagName("td")).each(function (item) {
            return __awaiter(this, void 0, void 0, function* () {
                yield item.getText().then(function (result) {
                    return __awaiter(this, void 0, void 0, function* () {
                        yield console.log(result);
                        if (result.indexOf(specialties) >= 0) {
                            spec = (yield spec) + 1;
                            yield console.log("Number of", specialties, "=", spec);
                        }
                    });
                });
            });
        });
    });
});
cucumber_1.Then('User should be navigate on Owners page and added owner should be displayed at last', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.wait(until.visibilityOf(HomeObj.PageName), 20000, 'Taking too long to load');
        let pagename = yield HomeObj.PageName.getText();
        yield console.log("page name : " + pagename);
        yield protractor_1.browser.refresh();
        yield protractor_1.browser.wait(until.visibilityOf(newOwnerObj.OwnerList), 20000, 'Taking too long to load');
        let ownerDetails = yield newOwnerObj.OwnerList.all(protractor_1.by.tagName("tr")).last();
        yield protractor_1.browser.actions().mouseMove(ownerDetails).perform();
        let owner_Name = yield ownerDetails.getText();
        yield protractor_1.browser.wait(until.elementToBeClickable(ownerDetails), 20000, 'Element taking too long to appear in the DOM');
        yield console.log("Added owner details : " + owner_Name);
        yield expect(userData_1.default.userData.OwnerData.OwnerDetail).to.equal(owner_Name);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpbl9TY2VuYXJpb3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5hdGlvbnMvTWFpbl9TY2VuYXJpb3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNkM7QUFDN0Msc0VBQW1FO0FBQ25FLG9FQUFpRTtBQUNqRSw4RUFBMkU7QUFDM0UsMkNBQTRFO0FBRTVFLDRFQUF3RTtBQUN4RSxtREFBNEM7QUFFNUMsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUVyQyxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDaEQsaUJBQWlCLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0FBRTdCLElBQUksT0FBTyxHQUFHLElBQUksaUNBQWUsRUFBRSxDQUFDO0FBQ3BDLElBQUksTUFBTSxHQUFHLElBQUksbUNBQWdCLEVBQUUsQ0FBQztBQUNwQyxJQUFJLE1BQU0sR0FBRyxJQUFJLDJDQUFvQixFQUFFLENBQUM7QUFDeEMsSUFBSSxXQUFXLEdBQUcsSUFBSSx3Q0FBa0IsRUFBRSxDQUFDO0FBRTNDLElBQUksS0FBSyxHQUFHLHVCQUFVLENBQUMsa0JBQWtCLENBQUM7QUFFMUMsZUFBSSxDQUFDLCtCQUErQixFQUFFOztRQUNsQyxJQUFJLEtBQUssR0FBRyxNQUFNLFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN0RSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRW5CLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDN0IsSUFBSSxNQUFNLEdBQUcsTUFBTSxvQkFBTyxDQUFDLGVBQUUs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
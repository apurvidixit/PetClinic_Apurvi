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
const protractor_1 = require("protractor");
const PetTypesPageObjects_1 = require("../pageObjects/PetTypesPageObjects");
const expect = global['chai'].expect;
var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(70 * 1000);
let HomeObj = new HomePageObjects_1.HomePageObjects();
let logObj = new LoginPageObjects_1.LoginPageObjects();
let petTypesObj = new PetTypesPageObjects_1.PetTypesPageObjects();
cucumber_1.When('User clicks on PetTypes tab', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield HomeObj.PetTypes.click();
        yield console.log("User clicks");
        // console.log(" PageTitle as : " + petTypesObj.pageTitle.getAttribute("innerText"));
        // console.log(" Name as : " + petTypesObj.Name.getAttribute("innerText"));
    });
});
cucumber_1.Then('Pet Types title should be displayed', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let pageTitle = yield petTypesObj.pageTitle.getText();
        yield console.log(" PageTitle as : " + pageTitle);
        yield expect("Pet Types").to.equal(pageTitle);
    });
});
cucumber_1.Given('User is on PetTypes tab page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield petTypesObj.pageTitle.isDisplayed().then(function (result) {
            return __awaiter(this, void 0, void 0, function* () {
                yield expect(true).to.equal(result);
            });
        });
    });
});
cucumber_1.Then('name field should be displayed', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let nameField = yield petTypesObj.Name.getText();
        yield console.log(" Name Field : " + nameField);
        yield expect("Name").to.equal(nameField);
        protractor_1.browser.sleep(5000);
    });
});
cucumber_1.Then('On Pet Types page Add & Home button texts should be displayed', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let addButton = yield petTypesObj.addButton.getText();
        let HomeButton = yield petTypesObj.HomeButton.getText();
        yield console.log(" Add Button : " + addButton);
        yield console.log(" Home Button : " + HomeButton);
        yield expect("Add").to.equal(addButton);
        yield expect("Home").to.equal(HomeButton);
    });
});
cucumber_1.When('User clicks on Add button on that page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield petTypesObj.addButton.click();
        console.log("Add Button clicked");
    });
});
cucumber_1.When('User give pet name {string} in text field and clicks submit', function (string) {
    return __awaiter(this, void 0, void 0, function* () {
        yield petTypesObj.nameTextbox.sendKeys(string);
        yield petTypesObj.saveButton.click();
    });
});
cucumber_1.Then('User should be navigate on PetTypes page and added pet name should be displayed at last', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let pagename = yield petTypesObj.pageTitle.getText();
        yield console.log("page name is : " + pagename);
    });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGV0VHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5hdGlvbnMvUGV0VHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNkM7QUFDN0Msc0VBQW1FO0FBQ25FLG9FQUFpRTtBQUNqRSwyQ0FBNEU7QUFFNUUsNEVBQXlFO0FBRXpFLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFFckMsSUFBSSxFQUFFLGlCQUFpQixFQUFFLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ2hELGlCQUFpQixDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztBQUU3QixJQUFJLE9BQU8sR0FBRyxJQUFJLGlDQUFlLEVBQUUsQ0FBQztBQUNwQyxJQUFJLE1BQU0sR0FBRyxJQUFJLG1DQUFnQixFQUFFLENBQUM7QUFDcEMsSUFBSSxXQUFXLEdBQUcsSUFBSSx5Q0FBbUIsRUFBRSxDQUFDO0FBRTVDLGVBQUksQ0FBQyw2QkFBNkIsRUFBRTs7UUFDaEMsTUFBTSxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQy9CLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNqQyxxRkFBcUY7UUFDckYsMkVBQTJFO0lBQy9FLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMscUNBQXFDLEVBQUU7O1FBQ3hDLElBQUksU0FBUyxHQUFHLE1BQU0sV0FBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN0RCxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEdBQUcsU0FBUyxDQUFDLENBQUM7UUFDbEQsTUFBTSxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNsRCxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBRUgsZ0JBQUssQ0FBQyw4QkFBOEIsRUFBRTs7UUFDbEMsTUFBTSxXQUFXLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFnQixNQUFNOztnQkFDakUsTUFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN4QyxDQUFDO1NBQUEsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyxnQ0FBZ0MsRUFBRTs7UUFDbkMsSUFBSSxTQUFTLEdBQUcsTUFBTSxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2pELE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUMsQ0FBQztRQUNoRCxNQUFNLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3pDLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hCLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsK0RBQStELEVBQUU7O1FBQ2xFLElBQUksU0FBUyxHQUFHLE1BQU0sV0FBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN0RCxJQUFJLFVBQVUsR0FBRyxNQUFNLFdBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDeEQsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixHQUFHLFNBQVMsQ0FBQyxDQUFDO1FBQ2hELE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxVQUFVLENBQUMsQ0FBQztRQUNsRCxNQUFNLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3hDLE1BQU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDOUMsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyx3Q0FBd0MsRUFBRTs7UUFDM0MsTUFBTSxXQUFXLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUN0QyxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLDZEQUE2RCxFQUFFLFVBQWdCLE1BQU07O1FBQ3RGLE1BQU0sV0FBVyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0MsTUFBTSxXQUFXLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pDLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFDSCxlQUFJLENBQUMseUZBQXlGLEVBQUU7O1FBQzVGLElBQUksUUFBUSxHQUFHLE1BQU0sV0FBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNyRCxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsUUFBUSxDQUFDLENBQUM7SUFDcEQsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBNEJLIn0=
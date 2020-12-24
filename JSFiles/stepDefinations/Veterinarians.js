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
const expect = global['chai'].expect;
var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(70 * 1000);
var until = protractor_1.protractor.ExpectedConditions;
let HomeObj = new HomePageObjects_1.HomePageObjects();
let logObj = new LoginPageObjects_1.LoginPageObjects();
let vetObj = new VeterinariansObjects_1.VeterinariansObjects();
cucumber_1.Then('User should navigate to Veterinarians add user', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.wait(until.elementToBeClickable(vetObj.Veterinarians), 20000, 'Element is not present');
        yield vetObj.Veterinarians.click();
        yield protractor_1.browser.wait(until.elementToBeClickable(vetObj.vetAdd), 20000, 'Element is not present');
        yield vetObj.vetAdd.click();
    });
});
cucumber_1.Given('User is on Veterinarians', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.wait(until.elementToBeClickable(vetObj.NewVeterians), 20000, 'Element is not present');
        let newvet = yield vetObj.NewVeterians.getAttribute("innerText");
        yield console.log(newvet);
        expect(yield vetObj.NewVeterians.getAttribute("innerText")).to.equals("New Veterinarian");
    });
});
cucumber_1.Then('User should able to see First Name', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let firstn = yield vetObj.FirstName.getAttribute("innerText");
        yield console.log(firstn);
        expect(yield vetObj.FirstName.getAttribute("innerText")).to.equals("First Name");
    });
});
cucumber_1.Then('User should able to see Last Name', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.sleep(5000);
        let lastn = yield vetObj.LastName.getAttribute("innerText");
        yield console.log(lastn);
        expect(yield vetObj.LastName.getAttribute("innerText")).to.equals("Last Name");
    });
});
cucumber_1.Then('User should able to see Type', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.sleep(5000);
        let lastn = yield vetObj.Type.getAttribute("innerText");
        yield console.log(lastn);
        expect(yield vetObj.Type.getAttribute("innerText")).to.equals("Type");
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmV0ZXJpbmFyaWFucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0ZXBEZWZpbmF0aW9ucy9WZXRlcmluYXJpYW5zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsdUNBQTZDO0FBQzdDLHNFQUFtRTtBQUNuRSxvRUFBaUU7QUFDakUsOEVBQTJFO0FBQzNFLDJDQUE0RTtBQUc1RSxNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDO0FBRXJDLElBQUksRUFBRSxpQkFBaUIsRUFBRSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNoRCxpQkFBaUIsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFDN0IsSUFBSSxLQUFLLEdBQUcsdUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQztBQUMxQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGlDQUFlLEVBQUUsQ0FBQztBQUNwQyxJQUFJLE1BQU0sR0FBRyxJQUFJLG1DQUFnQixFQUFFLENBQUM7QUFDcEMsSUFBSSxNQUFNLEdBQUcsSUFBSSwyQ0FBb0IsRUFBRSxDQUFDO0FBSXhDLGVBQUksQ0FBQyxnREFBZ0QsRUFBRTs7UUFDckQsTUFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEtBQUssRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO1FBQ3RHLE1BQU0sTUFBTSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNuQyxNQUFNLG9CQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxFQUFFLHdCQUF3QixDQUFDLENBQUM7UUFDL0YsTUFBTSxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzlCLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFSCxnQkFBSyxDQUFDLDBCQUEwQixFQUFFOztRQUNoQyxNQUFNLG9CQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsS0FBSyxFQUFFLHdCQUF3QixDQUFDLENBQUM7UUFDckcsSUFBSSxNQUFNLEdBQUcsTUFBTSxNQUFNLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNqRSxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUIsTUFBTSxDQUFDLE1BQU0sTUFBTSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFFNUYsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyxvQ0FBb0MsRUFBRTs7UUFFekMsSUFBSSxNQUFNLEdBQUcsTUFBTSxNQUFNLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM5RCxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUIsTUFBTSxDQUFDLE1BQU0sTUFBTSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBRW5GLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFHSCxlQUFJLENBQUMsbUNBQW1DLEVBQUU7O1FBQ3hDLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsSUFBSSxLQUFLLEdBQUcsTUFBTSxNQUFNLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM1RCxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekIsTUFBTSxDQUFDLE1BQU0sTUFBTSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2pGLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsOEJBQThCLEVBQUU7O1FBQ25DLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsSUFBSSxLQUFLLEdBQUcsTUFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN4RCxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekIsTUFBTSxDQUFDLE1BQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3hFLENBQUM7Q0FBQSxDQUFDLENBQUMifQ==
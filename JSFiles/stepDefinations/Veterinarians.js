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
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(70 * 1000);
let HomeObj = new HomePageObjects_1.HomePageObjects();
let logObj = new LoginPageObjects_1.LoginPageObjects();
let vetObj = new VeterinariansObjects_1.VeterinariansObjects();
cucumber_1.Then('User should navigate to Veterinarians', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield vetObj.Veterinarians.click();
        yield protractor_1.browser.sleep(3000);
        yield vetObj.vetAdd.click();
        yield protractor_1.browser.sleep(3000);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmV0ZXJpbmFyaWFucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0ZXBEZWZpbmF0aW9ucy9WZXRlcmluYXJpYW5zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsdUNBQTZDO0FBQzdDLHNFQUFtRTtBQUNuRSxvRUFBaUU7QUFDakUsOEVBQTJFO0FBQzNFLDJDQUE0RTtBQUk1RSxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7QUFDOUQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUUzQixJQUFJLEVBQUUsaUJBQWlCLEVBQUUsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDaEQsaUJBQWlCLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0FBRTdCLElBQUksT0FBTyxHQUFHLElBQUksaUNBQWUsRUFBRSxDQUFDO0FBQ3BDLElBQUksTUFBTSxHQUFHLElBQUksbUNBQWdCLEVBQUUsQ0FBQztBQUNwQyxJQUFJLE1BQU0sR0FBRyxJQUFJLDJDQUFvQixFQUFFLENBQUM7QUFFeEMsZUFBSSxDQUFDLHVDQUF1QyxFQUFDOztRQUV6QyxNQUFNLE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkMsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixNQUFNLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDNUIsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0NBQUEsQ0FBQyxDQUFDIn0=
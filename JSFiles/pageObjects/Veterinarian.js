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
exports.Veterinarian = void 0;
const protractor_1 = require("protractor");
const expect = global['chai'].expect;
const userData_1 = require("../testdata/userData");
class Veterinarian {
    constructor() {
        this.HomeMenu = protractor_1.element(protractor_1.by.css("a[href='/petclinic/welcome']"));
        this.vetAll = protractor_1.element(protractor_1.by.css("a[href='/petclinic/vets']"));
        this.vetAdd = protractor_1.element(protractor_1.by.css("a[href='/petclinic/vets/add']"));
        this.NewVeterians = protractor_1.element(protractor_1.by.css("a[href='/petclinic/vets/add']"));
        this.FirstName_field = protractor_1.element(protractor_1.by.css("input#firstName"));
        this.LastName_field = protractor_1.element(protractor_1.by.css("input#lastName"));
        this.FirstName = protractor_1.element(protractor_1.by.css("[for='firstName']"));
        this.LastName = protractor_1.element(protractor_1.by.css("[for='lastName']"));
        this.Type = protractor_1.element(protractor_1.by.css("[for='specialties']"));
        this.Owners = protractor_1.element(protractor_1.by.xpath("//*[@class='nav navbar-nav']/li[2]/a"));
        this.PetTypes = protractor_1.element(protractor_1.by.xpath("//*[@class='nav navbar-nav']/li[4]/a"));
        this.Specialties = protractor_1.element(protractor_1.by.xpath("//*[@class='nav navbar-nav']/li[5]/a"));
        this.VeterinariansList = protractor_1.element(protractor_1.by.xpath("//*[@id='vets']/tbody"));
        this.Radiologytype = protractor_1.element(protractor_1.by.xpath("//*[@id='specialties']/option[1]"));
        this.Pagename = protractor_1.element(protractor_1.by.xpath("/html/body/app-root/app-vet-list/div/div/h2"));
        this.vetListTableData = protractor_1.element.all(protractor_1.by.id("vets"));
        this.AllOwners = protractor_1.element(protractor_1.by.linkText("ALL"));
        this.Name = protractor_1.element(protractor_1.by.xpath("//*[@id='pettypes']/thead/tr/th[1]"));
        this.pageTitle = protractor_1.element(protractor_1.by.xpath("//*[@class='container xd-container']/h2"));
        this.addButton = protractor_1.element(protractor_1.by.xpath("/html/body/app-root/app-pettype-list/div/div/div/button[2]"));
        this.HomeButton = protractor_1.element(protractor_1.by.xpath("/html/body/app-root/app-pettype-list/div/div/div/button[1]"));
        this.nameTextbox = protractor_1.element(protractor_1.by.xpath("//*[@id='name']"));
        this.saveButton = protractor_1.element(protractor_1.by.xpath("//*[@id='pettype']/div[2]/div/button"));
        this.listEntry = protractor_1.element(protractor_1.by.xpath("//*[@id='pettypes']/tbody/tr[6]/td[1]"));
        this.PetName = protractor_1.element(protractor_1.by.xpath("//*[@class='table table-striped']/tr/app-pet-list/table/tr/td[1]/dl/dd[1]"));
        this.Pet_birthdate = protractor_1.element(protractor_1.by.xpath("//*[@class='table table-striped']/tr/app-pet-list/table/tr/td[1]/dl/dd[2]"));
        this.Pet_Type = protractor_1.element(protractor_1.by.xpath("//*[@class='table table-striped']/tr/app-pet-list/table/tr/td[1]/dl/dd[3]"));
        this.Veterinarians = protractor_1.element(protractor_1.by.xpath("//*[@class='nav navbar-nav']/li[3]/a"));
        this.AddOwnerButton = protractor_1.element(protractor_1.by.xpath("//*[@class='btn btn-default']"));
    }
    veterianAddUser() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.Veterinarians.click();
            yield this.vetAdd.click();
        });
    }
    firstName() {
        return __awaiter(this, void 0, void 0, function* () {
            let firstn = yield this.FirstName.getAttribute("innerText");
            yield console.log(firstn);
            expect(yield this.FirstName.getAttribute("innerText")).to.equals("First Name");
        });
    }
    clickVeterian() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.Veterinarians.click();
        });
    }
    clickOnAddOwnerButton() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.AddOwnerButton.click();
        });
    }
    clickOnAllOwnerSubMenu() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.AllOwners.click();
        });
    }
    clickVeterianAll() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.vetAll.click();
            let pagename = yield this.Pagename.getText();
            console.log("page name is : " + pagename);
        });
    }
    numberOfRadiologyVeterinarians() {
        return __awaiter(this, void 0, void 0, function* () {
            let specialties = "radiology";
            let spec = 0;
            yield this.vetListTableData.all(protractor_1.by.tagName("tr")).all(protractor_1.by.tagName("td")).each(function (item) {
                return __awaiter(this, void 0, void 0, function* () {
                    yield item.getText().then(function (result) {
                        return __awaiter(this, void 0, void 0, function* () {
                            console.log(result);
                            if (result.indexOf(specialties) >= 0) {
                                spec = (yield spec) + 1;
                                console.log("Number of", specialties, "=", spec);
                            }
                        });
                    });
                });
            });
        });
    }
    petDetailsForPeterMcTavish() {
        return __awaiter(this, void 0, void 0, function* () {
            let Petname = yield this.PetName.getAttribute("innerText");
            console.log("Petname :  " + Petname);
            yield expect(userData_1.default.userData.PetDetails.Pet_Name).to.equal(Petname);
            let Petbirthdate = yield this.Pet_birthdate.getAttribute("innerText");
            console.log("Pet BirthDate : " + Petbirthdate);
            yield expect(userData_1.default.userData.PetDetails.PetBday).to.equal(Petbirthdate);
            let PetType = yield this.Pet_Type.getAttribute("innerText");
            console.log("Pet Type : " + PetType);
            yield expect(userData_1.default.userData.PetDetails.PetTypes).to.equal(PetType);
        });
    }
}
exports.Veterinarian = Veterinarian;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmV0ZXJpbmFyaWFuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvVmV0ZXJpbmFyaWFuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDJDQUE0RTtBQUM1RSxNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDO0FBQ3JDLG1EQUE0QztBQUU1QyxNQUFhLFlBQVk7SUFBekI7UUFFWSxhQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUMsQ0FBQztRQUMzRCxXQUFNLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUMsQ0FBQztRQUN0RCxXQUFNLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQUMsQ0FBQztRQUMxRCxpQkFBWSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLENBQUM7UUFDaEUsb0JBQWUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO1FBQ3JELG1CQUFjLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztRQUNuRCxjQUFTLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztRQUNqRCxhQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztRQUMvQyxTQUFJLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztRQUU5QyxXQUFNLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMs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
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetTypesPageObjects = void 0;
const protractor_1 = require("protractor");
class PetTypesPageObjects {
    constructor() {
        this.Name = protractor_1.element(protractor_1.by.xpath("//*[@id='pettypes']/thead/tr/th[1]"));
        this.pageTitle = protractor_1.element(protractor_1.by.xpath("//*[@class='container xd-container']/h2"));
        this.addButton = protractor_1.element(protractor_1.by.xpath("/html/body/app-root/app-pettype-list/div/div/div/button[2]"));
        this.HomeButton = protractor_1.element(protractor_1.by.xpath("/html/body/app-root/app-pettype-list/div/div/div/button[1]"));
        this.nameTextbox = protractor_1.element(protractor_1.by.xpath("//*[@id='name']"));
        this.saveButton = protractor_1.element(protractor_1.by.xpath("//*[@id='pettype']/div[2]/div/button"));
        this.listEntry = protractor_1.element(protractor_1.by.xpath("//*[@id='pettypes']/tbody/tr[6]/td[1]"));
    }
}
exports.PetTypesPageObjects = PetTypesPageObjects;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGV0VHlwZXNQYWdlT2JqZWN0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3RzL1BldFR5cGVzUGFnZU9iamVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQTRFO0FBRTVFLE1BQWEsbUJBQW1CO0lBVTVCO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxTQUFTLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsU0FBUyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw0REFBNEQsQ0FBQyxDQUFDLENBQUM7UUFDL0YsSUFBSSxDQUFDLFVBQVUsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsNERBQTRELENBQUMsQ0FBQyxDQUFDO1FBQ2hHLElBQUksQ0FBQyxXQUFXLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsVUFBVSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLFNBQVMsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsdUNBQXVDLENBQUMsQ0FBQyxDQUFDO0lBRTlFLENBQUM7Q0FDSjtBQXBCRCxrREFvQkMifQ==
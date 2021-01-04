"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editOwnerObj = void 0;
const protractor_1 = require("protractor");
class editOwnerObj {
    constructor() {
        this.firstOwner = protractor_1.element(protractor_1.by.xpath("//*[@class='table table-striped']/tbody/tr[1]/td[1]/a"));
        this.addVisit = protractor_1.element(protractor_1.by.xpath("//*[contains(text(),'Add Visit')]"));
        this.date = protractor_1.element(protractor_1.by.xpath("//*[@class='mat-datepicker-toggle']"));
        this.month = protractor_1.element(protractor_1.by.xpath("//*[@class='mat-calendar-period-button mat-button']"));
        this.selectDate = protractor_1.element(protractor_1.by.css('.cdk-overlay-container mat-month-view[aria-label="2020/12/01"]'));
        //this.nextMnth = element(by.xpath("//*[@class='mat-calendar-next-button mat-icon-button']"));
        this.nextMnth = protractor_1.element(protractor_1.by.xpath("//*[@aria-label='Next month']"));
        this.previousMnth = protractor_1.element(protractor_1.by.xpath("//*[@aria-label='Previous month']"));
    }
}
exports.editOwnerObj = editOwnerObj;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdE93bmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvZWRpdE93bmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUE0RTtBQUM1RSxNQUFhLFlBQVk7SUFTckI7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx1REFBdUQsQ0FBQyxDQUFDLENBQUM7UUFDN0YsSUFBSSxDQUFDLFFBQVEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxJQUFJLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHFDQUFxQyxDQUFDLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsS0FBSyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxxREFBcUQsQ0FBQyxDQUFDLENBQUM7UUFDdEYsSUFBSSxDQUFDLFVBQVUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsZ0VBQWdFLENBQUMsQ0FBQyxDQUFDO1FBQ3BHLDhGQUE4RjtRQUM5RixJQUFJLENBQUMsUUFBUSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLFlBQVksR0FBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxDQUFDO0lBRzlFLENBQUM7Q0FHSjtBQXZCRCxvQ0F1QkMifQ==
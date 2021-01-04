"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newOwnerPageObject = void 0;
const protractor_1 = require("protractor");
class newOwnerPageObject {
    constructor() {
        this.FirstName = protractor_1.element(protractor_1.by.xpath("//*[@id='firstName']"));
        this.LastName = protractor_1.element(protractor_1.by.xpath("//*[@id='lastName']"));
        this.Address = protractor_1.element(protractor_1.by.xpath("//*[@id='address']"));
        this.City = protractor_1.element(protractor_1.by.xpath("//*[@id='city']"));
        this.Telephone = protractor_1.element(protractor_1.by.xpath("//*[@id='telephone']"));
        this.AddOwnerButton = protractor_1.element(protractor_1.by.xpath("//*[contains(text(),'Add Owner')]"));
        this.OwnerList = protractor_1.element(protractor_1.by.xpath("//*[@class='table table-striped']/tbody"));
        this.OwnerInfoTable = protractor_1.element(protractor_1.by.xpath("//*[@class='table table-striped']"));
        this.PetName = protractor_1.element(protractor_1.by.xpath("//*[@class='table table-striped']/tr/app-pet-list/table/tr/td[1]/dl/dd[1]"));
        this.Pet_birthdate = protractor_1.element(protractor_1.by.xpath("//*[@class='table table-striped']/tr/app-pet-list/table/tr/td[1]/dl/dd[2]"));
        this.Pet_Type = protractor_1.element(protractor_1.by.xpath("//*[@class='table table-striped']/tr/app-pet-list/table/tr/td[1]/dl/dd[3]"));
    }
}
exports.newOwnerPageObject = newOwnerPageObject;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3T3duZXJQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvbmV3T3duZXJQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUE0RTtBQUU1RSxNQUFhLGtCQUFrQjtJQWEzQjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsUUFBUSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLE9BQU8sR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxJQUFJLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsU0FBUyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLGNBQWMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxDQUFDO1FBRTdFLElBQUksQ0FBQyxTQUFTLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsY0FBYyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLE9BQU8sR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsMkVBQTJFLENBQUMsQ0FBQyxDQUFDO1FBQzVHLElBQUksQ0FBQyxhQUFhLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDJFQUEyRSxDQUFDLENBQUMsQ0FBQztRQUNsSCxJQUFJLENBQUMsUUFBUSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywyRUFBMkUsQ0FBQyxDQUFDLENBQUM7SUFHakgsQ0FBQztDQUNKO0FBN0JELGdEQTZCQyJ9
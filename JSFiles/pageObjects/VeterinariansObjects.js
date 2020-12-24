"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VeterinariansObjects = void 0;
const protractor_1 = require("protractor");
class VeterinariansObjects {
    constructor() {
        this.HomeMenu = protractor_1.element(protractor_1.by.xpath("//*[@class='nav navbar-nav']/li[1]/a"));
        this.Owners = protractor_1.element(protractor_1.by.xpath("//*[@class='nav navbar-nav']/li[2]/a"));
        this.Veterinarians = protractor_1.element(protractor_1.by.xpath("//*[@class='nav navbar-nav']/li[3]/a"));
        this.PetTypes = protractor_1.element(protractor_1.by.xpath("//*[@class='nav navbar-nav']/li[4]/a"));
        this.Specialties = protractor_1.element(protractor_1.by.xpath("//*[@class='nav navbar-nav']/li[5]/a"));
        this.vetAdd = protractor_1.element(protractor_1.by.xpath("/html/body/app-root/div[1]/nav/div/ul/li[3]/ul/li[2]/a"));
        this.vetAll = protractor_1.element(protractor_1.by.xpath("/html/body/app-root/div[1]/nav/div/ul/li[3]/ul/li[1]/a"));
        this.NewVeterians = protractor_1.element(protractor_1.by.xpath("/html/body/app-root/app-vet-add/div/div/h2"));
        this.VeterinariansList = protractor_1.element(protractor_1.by.xpath("//*[@id='vets']/tbody"));
        this.FirstName = protractor_1.element(protractor_1.by.xpath("//*[@id='vet']/div[2]/label"));
        this.LastName = protractor_1.element(protractor_1.by.xpath("//*[@id='vet'/div[3]/label"));
        this.Type = protractor_1.element(protractor_1.by.xpath("//*[@id='vet']/div[4]/div/label"));
        this.FirstName_field = protractor_1.element(protractor_1.by.xpath("//*[@id='firstName']"));
        this.LastName_field = protractor_1.element(protractor_1.by.xpath("//*[@id='lastName']"));
        this.Radiologytype = protractor_1.element(protractor_1.by.xpath("//*[@id='specialties']/option[1]"));
        this.Pagename = protractor_1.element(protractor_1.by.xpath("/html/body/app-root/app-vet-list/div/div/h2"));
        this.vetListTableData = protractor_1.element.all(protractor_1.by.id("vets"));
    }
}
exports.VeterinariansObjects = VeterinariansObjects;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmV0ZXJpbmFyaWFuc09iamVjdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0cy9WZXRlcmluYXJpYW5zT2JqZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBNEU7QUFHNUUsTUFBYSxvQkFBb0I7SUFtQjdCO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsc0NBQXNDLENBQUMsQ0FBQyxDQUFDO1FBQzFFLElBQUksQ0FBQyxNQUFNLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHNDQUFzQyxDQUFDLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsYUFBYSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDLENBQUM7UUFDL0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsc0NBQXNDLENBQUMsQ0FBQyxDQUFDO1FBQzFFLElBQUksQ0FBQyxXQUFXLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHNDQUFzQyxDQUFDLENBQUMsQ0FBQztRQUM3RSxJQUFJLENBQUMsTUFBTSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx3REFBd0QsQ0FBQyxDQUFDLENBQUM7UUFDMUYsSUFBSSxDQUFDLE1BQU0sR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsd0RBQXdELENBQUMsQ0FBQyxDQUFDO1FBQzFGLElBQUksQ0FBQyxZQUFZLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDRDQUE0QyxDQUFDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsaUJBQWlCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQTtRQUNuRSxJQUFJLENBQUMsU0FBUyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxJQUFJLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGlDQUFpQyxDQUFDLENBQUMsQ0FBQztRQUVqRSxJQUFJLENBQUMsZUFBZSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLGNBQWMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO1FBRS9ELElBQUksQ0FBQyxhQUFhLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGtDQUFrQyxDQUFDLENBQUMsQ0FBQztRQUMzRSxJQUFJLENBQUMsUUFBUSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDLENBQUM7UUFDakYsSUFBSSxDQUFDLGdCQUFnQixHQUFHLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0NBR0o7QUExQ0Qsb0RBMENDIn0=
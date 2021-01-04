import { ElementFinder, element, by, ElementArrayFinder } from "protractor";

export class newOwnerPageObject {
    FirstName: ElementFinder;
    LastName: ElementFinder;
    Address: ElementFinder;
    City: ElementFinder;
    Telephone: ElementFinder;
    AddOwnerButton: ElementFinder;
    OwnerList:ElementFinder;
    OwnerInfoTable:ElementFinder;
    PetName:ElementFinder;
    Pet_birthdate:ElementFinder;
    Pet_Type:ElementFinder;

    constructor() {
        this.FirstName = element(by.xpath("//*[@id='firstName']"));
        this.LastName = element(by.xpath("//*[@id='lastName']"));
        this.Address = element(by.xpath("//*[@id='address']"));
        this.City = element(by.xpath("//*[@id='city']"));
        this.Telephone = element(by.xpath("//*[@id='telephone']"));
        this.AddOwnerButton = element(by.xpath("//*[contains(text(),'Add Owner')]"));

        this.OwnerList=element(by.xpath("//*[@class='table table-striped']/tbody"));
        this.OwnerInfoTable=element(by.xpath("//*[@class='table table-striped']"));
      
    
    }
}

import { ElementFinder, element, by, ElementArrayFinder } from "protractor";
import locators from "../TestData/webObjects";

export class VeterinariansObjects {
    HomeMenu: ElementFinder;
    Owners: ElementFinder;
    Veterinarians: ElementFinder;
    PetTypes: ElementFinder;
    Specialties: ElementFinder;
    vetAdd:ElementFinder;
    NewVeterians:ElementFinder;
    FirstName:ElementFinder;
    LastName:ElementFinder;
    Type:ElementFinder;

    constructor() {
        this.HomeMenu = element(by.xpath("//*[@class='nav navbar-nav']/li[1]/a"));
        this.Owners = element(by.xpath("//*[@class='nav navbar-nav']/li[2]/a"));
        this.Veterinarians = element(by.xpath("//*[@class='nav navbar-nav']/li[3]/a"));
        this.PetTypes = element(by.xpath("//*[@class='nav navbar-nav']/li[4]/a"));
        this.Specialties = element(by.xpath("//*[@class='nav navbar-nav']/li[5]/a"));
        this.vetAdd= element(by.xpath("/html/body/app-root/div[1]/nav/div/ul/li[3]/ul/li[2]/a"));
        this.NewVeterians=element(by.xpath("/html/body/app-root/app-vet-add/div/div/h2"));

        this.FirstName=element(by.xpath("//*[@id='vet']/div[2]/label"));
        this.LastName=element(by.xpath("//*[@id='vet'/div[3]/label"));
        this.Type=element(by.xpath("//*[@id='vet']/div[4]/div/label"))
    }


}
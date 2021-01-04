import { ElementFinder, element, by, ElementArrayFinder } from "protractor";


export class VeterinariansObjects {
    HomeMenu: ElementFinder;
    Owners: ElementFinder;
    Veterinarians: ElementFinder;
    PetTypes: ElementFinder;
    Specialties: ElementFinder;
    vetAdd: ElementFinder;
    NewVeterians: ElementFinder;
    FirstName: ElementFinder;
    LastName: ElementFinder;
    Type: ElementFinder;
    Radiologytype: ElementFinder;
    FirstName_field: ElementFinder;
    LastName_field: ElementFinder;
    Pagename: ElementFinder;
    vetAll: ElementFinder;
    VeterinariansList: ElementFinder;
    vetListTableData:ElementArrayFinder;

    Name: ElementFinder;
    pageTitle: ElementFinder;
    addButton: ElementFinder;
    HomeButton: ElementFinder;
    nameTextbox: ElementFinder;
    saveButton: ElementFinder;
    listEntry:ElementFinder;


    constructor() {
        this.HomeMenu = element(by.css("a[href='/petclinic/welcome']"));
        this.Owners = element(by.xpath("//*[@class='nav navbar-nav']/li[2]/a"));
        this.Veterinarians = element(by.xpath("//*[@class='nav navbar-nav']/li[3]/a"));
        this.PetTypes = element(by.xpath("//*[@class='nav navbar-nav']/li[4]/a"));
        this.Specialties = element(by.xpath("//*[@class='nav navbar-nav']/li[5]/a"));
        this.vetAdd = element(by.css("a[href='/petclinic/vets/add']"));
        this.vetAll = element(by.css("a[href='/petclinic/vets']"));
        this.vetAll = element(by.xpath("/html/body/app-root/div[1]/nav/div/ul/li[3]/ul/li[1]/a"));
        this.NewVeterians = element(by.xpath("/html/body/app-root/app-vet-add/div/div/h2"));
        this.VeterinariansList = element(by.xpath("//*[@id='vets']/tbody"))
        this.FirstName = element(by.xpath("//*[@id='vet']/div[2]/label"));
        this.LastName = element(by.xpath("//*[@id='vet'/div[3]/label"));
        this.Type = element(by.xpath("//*[@id='vet']/div[4]/div/label"));

        this.FirstName_field = element(by.xpath("//*[@id='firstName']"));
        this.LastName_field = element(by.xpath("//*[@id='lastName']"));

        this.Radiologytype = element(by.xpath("//*[@id='specialties']/option[1]"));
        this.Pagename = element(by.xpath("/html/body/app-root/app-vet-list/div/div/h2"));
        this.vetListTableData = element.all(by.id("vets"));




        this.Name = element(by.xpath("//*[@id='pettypes']/thead/tr/th[1]"));
        this.pageTitle=element(by.xpath("//*[@class='container xd-container']/h2"));
        this.addButton=element(by.xpath("/html/body/app-root/app-pettype-list/div/div/div/button[2]"));
        this.HomeButton=element(by.xpath("/html/body/app-root/app-pettype-list/div/div/div/button[1]"));
        this.nameTextbox=element(by.xpath("//*[@id='name']"));
        this.saveButton=element(by.xpath("//*[@id='pettype']/div[2]/div/button"));
        this.listEntry=element(by.xpath("//*[@id='pettypes']/tbody/tr[6]/td[1]"));
    }


}
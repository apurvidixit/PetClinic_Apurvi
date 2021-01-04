import { ElementFinder, element, by, ElementArrayFinder } from "protractor";
const expect = global['chai'].expect;
import testdata from "../testdata/userData";

export class Veterinarian {

    private HomeMenu = element(by.css("a[href='/petclinic/welcome']"));
    private vetAll = element(by.css("a[href='/petclinic/vets']"));
    private vetAdd = element(by.css("a[href='/petclinic/vets/add']"));
    private NewVeterians = element(by.css("a[href='/petclinic/vets/add']"));
    private FirstName_field = element(by.css("input#firstName"));
    private LastName_field = element(by.css("input#lastName"));
    private FirstName = element(by.css("[for='firstName']"));
    private LastName = element(by.css("[for='lastName']"));
    private Type = element(by.css("[for='specialties']"));

    private Owners = element(by.xpath("//*[@class='nav navbar-nav']/li[2]/a"));

    private PetTypes = element(by.xpath("//*[@class='nav navbar-nav']/li[4]/a"));
    private Specialties = element(by.xpath("//*[@class='nav navbar-nav']/li[5]/a"));

    
    
    private VeterinariansList = element(by.xpath("//*[@id='vets']/tbody"))



    private Radiologytype = element(by.xpath("//*[@id='specialties']/option[1]"));
    private Pagename = element(by.xpath("/html/body/app-root/app-vet-list/div/div/h2"));
    private vetListTableData = element.all(by.id("vets"));
    private AllOwners= element(by.linkText("ALL"));
    private Name = element(by.xpath("//*[@id='pettypes']/thead/tr/th[1]"));
    private pageTitle = element(by.xpath("//*[@class='container xd-container']/h2"));
    private addButton = element(by.xpath("/html/body/app-root/app-pettype-list/div/div/div/button[2]"));
    private HomeButton = element(by.xpath("/html/body/app-root/app-pettype-list/div/div/div/button[1]"));
    private nameTextbox = element(by.xpath("//*[@id='name']"));
    private saveButton = element(by.xpath("//*[@id='pettype']/div[2]/div/button"));
    private listEntry = element(by.xpath("//*[@id='pettypes']/tbody/tr[6]/td[1]"));
    private PetName = element(by.xpath("//*[@class='table table-striped']/tr/app-pet-list/table/tr/td[1]/dl/dd[1]"));
    private Pet_birthdate = element(by.xpath("//*[@class='table table-striped']/tr/app-pet-list/table/tr/td[1]/dl/dd[2]"));
    private Pet_Type = element(by.xpath("//*[@class='table table-striped']/tr/app-pet-list/table/tr/td[1]/dl/dd[3]"));

    private Veterinarians = element(by.xpath("//*[@class='nav navbar-nav']/li[3]/a"));
    
 
    private AddOwnerButton=element(by.xpath("//*[@class='btn btn-default']"));

    public async veterianAddUser() {
        await this.Veterinarians.click();
        await this.vetAdd.click();
    }
    public async firstName() {
        let firstn = await this.FirstName.getAttribute("innerText");
        await console.log(firstn);
        expect(await this.FirstName.getAttribute("innerText")).to.equals("First Name");
    }
    public async clickVeterian() {
        await this.Veterinarians.click();
    }

    
    public async clickOnAddOwnerButton() {
        await this.AddOwnerButton.click();
    }
    public async clickOnAllOwnerSubMenu() {
        await this.AllOwners.click();
   
    }

    public async clickVeterianAll() {
        await this.vetAll.click();
        let pagename = await this.Pagename.getText();
        console.log("page name is : " + pagename);
    }
    public async numberOfRadiologyVeterinarians() {
        let specialties = "radiology";
        let spec = 0;
        await this.vetListTableData.all(by.tagName("tr")).all(by.tagName("td")).each(async function (item) {
            await item!.getText().then(async function (result) {
                console.log(result);
                if (result.indexOf(specialties) >= 0) {
                    spec = await spec + 1;
                    console.log("Number of", specialties, "=", spec);
                }
            });
        });
    }

    public async petDetailsForPeterMcTavish() {
        let Petname = await this.PetName.getAttribute("innerText");
        console.log("Petname :  " + Petname);
        await expect(testdata.userData.PetDetails.Pet_Name).to.equal(Petname);

        let Petbirthdate = await this.Pet_birthdate.getAttribute("innerText");
        console.log("Pet BirthDate : " + Petbirthdate);
        await expect(testdata.userData.PetDetails.PetBday).to.equal(Petbirthdate);

        let PetType = await this.Pet_Type.getAttribute("innerText");
        console.log("Pet Type : " + PetType);
        await expect(testdata.userData.PetDetails.PetTypes).to.equal(PetType);

    }



}
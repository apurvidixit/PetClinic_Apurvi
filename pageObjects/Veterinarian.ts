import { browser, ElementFinder, element, by, ElementArrayFinder, protractor } from "protractor";
const expect = global['chai'].expect;
import testdata from "../testdata/userData";
var until = protractor.ExpectedConditions;

export class Veterinarian {

    private HomeMenu = element(by.css("a[href='/petclinic/welcome']"));
    private vetAll = element(by.css("a[href='/petclinic/vets']"));
    private vetAdd = element(by.css("a[href='/petclinic/vets/add']"));
    private NewVeterians = element(by.css("a[href='/petclinic/vets/add']"));
    private FirstName_field = element(by.css("input#firstName"));
    private LastName_field = element(by.css("input#lastName"));
    public FirstName = element(by.css("[for='firstName']"));
    public LastName = element(by.css("[for='lastName']"));
    public Type = element(by.css("[for='specialties']"));

    private Owners = element(by.xpath("//*[@class='nav navbar-nav']/li[2]/a"));
    private Pagename = element(by.xpath("/html/body/app-root/app-vet-list/div/div/h2"));
    private vetListTableData = element.all(by.id("vets"));
    private AllOwners = element(by.linkText("ALL"));

    // private PetTypes = element(by.xpath("//*[@class='nav navbar-nav']/li[4]/a"));
    // private Specialties = element(by.xpath("//*[@class='nav navbar-nav']/li[5]/a"));
    //private VeterinariansList = element(by.xpath("//*[@id='vets']/tbody"));
    //private Radiologytype = element(by.xpath("//*[@id='specialties']/option[1]"));
    //private Name = element(by.xpath("//*[@id='pettypes']/thead/tr/th[1]"));
    // private pageTitle = element(by.xpath("//*[@class='container xd-container']/h2"));
    // private addButton = element(by.xpath("/html/body/app-root/app-pettype-list/div/div/div/button[2]"));
    // private HomeButton = element(by.xpath("/html/body/app-root/app-pettype-list/div/div/div/button[1]"));
    // private nameTextbox = element(by.xpath("//*[@id='name']"));
    // private saveButton = element(by.xpath("//*[@id='pettype']/div[2]/div/button"));
    // private listEntry = element(by.xpath("//*[@id='pettypes']/tbody/tr[6]/td[1]"));
    private PetName = element(by.xpath("//*[@class='table table-striped']/tr/app-pet-list/table/tr/td[1]/dl/dd[1]"));
    private Pet_birthdate = element(by.xpath("//*[@class='table table-striped']/tr/app-pet-list/table/tr/td[1]/dl/dd[2]"));
    private Pet_Type = element(by.xpath("//*[@class='table table-striped']/tr/app-pet-list/table/tr/td[1]/dl/dd[3]"));
    public WelcomeMsg = element(by.xpath("//*[contains(text(),'Welcome to Petclinic')]"));
    private Veterinarians = element(by.xpath("//*[@class='nav navbar-nav']/li[3]/a"));
    public Address = element(by.xpath("//*[@id='address']"));
    public City = element(by.xpath("//*[@id='city']"));
    public Telephone = element(by.xpath("//*[@id='telephone']"));
    private AddOwnerButton = element(by.xpath("//*[@class='btn btn-default']"));
    private PageName = element(by.xpath("//*[@class='container xd-container']/h2"));
    private OwnerList = element(by.xpath("//*[@class='table table-striped']/tbody"));
    private OwnerInfoTable = element(by.xpath("//*[@class='table table-striped']"));
    private AddNewOwner = element(by.linkText("ADD NEW"));

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
    public async clickAddNewOwner() {
        await this.AddNewOwner.click();
    }
    public async checkNewOwnerPage() {
        let pagename = await this.PageName.getText();
        console.log("page name is : " + pagename);
    }

    public async checkOwnerList() {
        let page = await this.PageName.getText();
        console.log(" page name is : " + page);
    }

    public async ownerTabText() {
        let Owners = await this.Owners.getAttribute("innerText");
        console.log(" Tab name is : " + Owners);
        await expect("OWNERS").to.equal(Owners);
    }



    public async clickOnAddOwnerButton() {
        await this.AddOwnerButton.click();
    }
    public async clickOnAllOwnerSubMenu() {
        await this.AllOwners.click();

    }
    public async checkNewOwnerPageText() {
        await this.PageName.isDisplayed().then(async function (result) {
            await expect(true).to.equal(result);
        });
    }
    public async petClinicHomePage() {
        await this.WelcomeMsg.isDisplayed().then(async function (result) {
            await expect(true).to.equal(result);
        });
    }
    public async clickOwners() {
        await this.Owners.click();
    }

    public async clickAddOwners() {
        await this.AddOwnerButton.click();
    }

    public async clickPeterMcTavish() {
        let count = await this.OwnerList.all(by.tagName("tr")).count();
        console.log(count);

        for (let i = 1; i <= count; i++) {
            let owners = await element(by.xpath("//*[@class='table table-striped']/tbody/tr[" + i + "]/td/a")).getAttribute("innerText");
            console.log(owners);
            if (owners == "Peter McTavish") {
                await element(by.xpath("//*[@class='table table-striped']/tbody/tr[" + i + "]/td/a")).click();
                await browser.wait(until.presenceOf(this.OwnerInfoTable), 20000, 'Element is not present');
                break;
            }
        }
    }

    public async checkAll_AddNewOwner() {
        let firstMenu = await this.AllOwners.getText();
        await expect("ALL").to.equal(firstMenu);
        console.log("first drop-down menue is : " + firstMenu);

        let secondMenu = await this.AddNewOwner.getText();
        await expect("ADD NEW").to.equal(secondMenu);
        console.log("second drop-down menue is : " + secondMenu);
    }

    public async checkAddedOwner() {

        let pagename = await this.PageName.getText();
        console.log("page name : " + pagename);
        await browser.refresh();
        await browser.wait(until.visibilityOf(this.OwnerList), 20000, 'Taking too long to load');
        let ownerDetails = await this.OwnerList.all(by.tagName("tr")).last();
        await browser.actions().mouseMove(ownerDetails).perform();
        let owner_Name = await ownerDetails.getText();
        await browser.wait(until.elementToBeClickable(ownerDetails), 20000, 'Element taking too long to appear in the DOM');
        console.log("Added owner details : " + owner_Name);
        await expect(testdata.userData.OwnerData.OwnerDetail).to.equal(owner_Name);

    }

    public async enterAllDetailsOwner() {
        let firstName = testdata.userData.OwnerData.FirstName;
        await this.FirstName.sendKeys(firstName);

        let lastName = testdata.userData.OwnerData.LastName;
        await this.LastName.sendKeys(lastName);

        let address = testdata.userData.OwnerData.Address;
        await this.Address.sendKeys(address);

        let city = testdata.userData.OwnerData.City;
        await this.City.sendKeys(city);

        let telephone = testdata.userData.OwnerData.Telephone;
        await this.Telephone.sendKeys(telephone);
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
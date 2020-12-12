import { Given, When, Then } from "cucumber";
import { LoginPageObjects } from "../pageObjects/LoginPageObjects";
import { HomePageObjects } from "../pageObjects/HomePageObjects";
import { VeterinariansObjects } from "../pageObjects/VeterinariansObjects";
import { browser, by, element, ElementFinder, protractor } from "protractor"
import TestData from "../TestData/userData";


const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(70 * 1000);

let HomeObj = new HomePageObjects();
let logObj = new LoginPageObjects();
let vetObj = new VeterinariansObjects();

Then('User should navigate to Veterinarians',async function () {
    
    await vetObj.Veterinarians.click();
    await browser.sleep(3000);
    await vetObj.vetAdd.click();
    await browser.sleep(3000);
  });
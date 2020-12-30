import { Given, When, Then } from "cucumber";
import { VeterinariansObjects } from "../pageObjects/VeterinariansObjects";
import { browser, by, element, ElementFinder, protractor } from "protractor"

const expect = global['chai'].expect;

var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(70 * 1000);
var until = protractor.ExpectedConditions;
let vetObj = new VeterinariansObjects();

Then('User should navigate to Veterinarians add user', async function () {
  await browser.wait(until.elementToBeClickable(vetObj.Veterinarians), 20000, 'Element is not present');
  await vetObj.Veterinarians.click();
  await browser.wait(until.elementToBeClickable(vetObj.vetAdd), 20000, 'Element is not present');
  await vetObj.vetAdd.click();
});

Given('User is on Veterinarians', async function () {
  await browser.wait(until.elementToBeClickable(vetObj.NewVeterians), 20000, 'Element is not present');
  let newvet = await vetObj.NewVeterians.getAttribute("innerText");
  await console.log(newvet);
  expect(await vetObj.NewVeterians.getAttribute("innerText")).to.equals("New Veterinarian");

});

Then('User should able to see First Name', async function () {
 
  let firstn = await vetObj.FirstName.getAttribute("innerText");
  await console.log(firstn);
  expect(await vetObj.FirstName.getAttribute("innerText")).to.equals("First Name");
});


Then('User should able to see Last Name', async function () {
  await browser.sleep(5000);
  let lastn = await vetObj.LastName.getAttribute("innerText");
  await console.log(lastn);
  expect(await vetObj.LastName.getAttribute("innerText")).to.equals("Last Name");
});

Then('User should able to see Type', async function () {
  await browser.sleep(5000);
  let lastn = await vetObj.Type.getAttribute("innerText");
  await console.log(lastn);
  expect(await vetObj.Type.getAttribute("innerText")).to.equals("Type");
});

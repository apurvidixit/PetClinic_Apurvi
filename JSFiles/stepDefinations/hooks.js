"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
cucumber_1.Before(function () {
    return __awaiter(this, void 0, void 0, function* () {
        // This hook will be executed before scenarios tagged with @foo
        //browser.manage().window().maximize();  given in conf file 
    });
});
// After(async function (scenario) {
//   //This hook will be executed before scenarios tagged with @foo
//   const screenshot = await browser.takeScreenshot();
//   this.attach(screenshot, "image/png")
// });
cucumber_1.After(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        if (scenario.result.status === "failed") {
            const screenshot = yield protractor_1.browser.takeScreenshot();
            this.attach(screenshot, "image/png");
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5hdGlvbnMvaG9va3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBaUQ7QUFDakQsMkNBQXFDO0FBRXJDLGlCQUFNLENBQUM7O1FBRUwsK0RBQStEO1FBQy9ELDREQUE0RDtJQUM5RCxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBRUgsb0NBQW9DO0FBQ3BDLG1FQUFtRTtBQUNuRSx1REFBdUQ7QUFDdkQseUNBQXlDO0FBQ3pDLE1BQU07QUFHTixnQkFBSyxDQUFDLFVBQWdCLFFBQVE7O1FBRTVCLElBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUcsUUFBUSxFQUFDO1lBQ3JDLE1BQU0sVUFBVSxHQUFHLE1BQU0sb0JBQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNsRCxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsQ0FBQTtTQUNuQztJQUNILENBQUM7Q0FBQSxDQUFDLENBQUMifQ==
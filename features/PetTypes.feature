Feature: User going to validate PetTypes tab of Petclinic Application


       Scenario: Verify title of the page as 'Pet Types' on clicking menu pettypes
              Given User is on Petclinic home page
              When User clicks on PetTypes tab
              Then Pet Types title should be displayed

       Scenario: Verify User able to see name field on PetTypes page
              Given User is on PetTypes tab page
              Then name field should be displayed

       Scenario: Verify button text on the Pet Types page as 'Add' & 'Home'
              Given User is on PetTypes tab page
              Then On Pet Types page Add & Home button texts should be displayed

       Scenario Outline: Verify new pet name is added successfully after clicking add button
              Given User is on PetTypes tab page
              When User clicks on Add button on that page
              And User give pet name "<Pet_Type>" in text field and clicks submit
              Then User should be navigate on PetTypes page and added pet name should be displayed at last

       Examples:
            | Pet_Type |
            | Fish   | 
           





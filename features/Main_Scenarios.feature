Feature: User going to validate New Owner Page for Petclinic application


    Scenario: Verify sub-menus like ALL and ADD NEW is displays on Owners tab
        Given User is on Petclinic home page
        When User clicks on owners tab
        Then ALL and ADD NEW owners sub-menus should be displayed

    Scenario: Verify user clicks on ADD NEW sub-menu on Owners tab
        Given User is on Owners tab
        When User clicks on ADD NEW sub-menu
        Then New Owner page should get displayed

    Scenario: Verify user is able to add New Owner
        Given User is on New Owner page
        When User enter valid First Name, Last Name, Address, City, Telephone
        And User clicks on Add Owner button on New Owner page
        Then User should be navigate on Owners page and added owner should be displayed at last

    Scenario Outline: Verify user is able to add New Owner
        Given User is on New Owner page
        When User enter valid "<FirstName>" "<LastName>" "<Address>" "<City>" "<Telephone>"
        And User clicks on Add Owner button on New Owner page
        Then User should be navigate on Owners page and added owner should be displayed at last

        Examples:
            | FirstName | LastName | Address | City | Telephone |
    # | Dale       | Tyson     | Wakad   | Pune | 9632      |

    Scenario: Confirm the pet details (Name, Birthdate, Type) for Peter McTavish
        Given User is on New Owner page
        When User clicks on Peter McTavish
        Then User should see Pet Details for Peter McTavish

    Scenario: Confirm radiology veterinarians
        Given User clicks on veterinarians
        When User clicks on ALL veterinarians
        Then Number of radiology veterinarians will display




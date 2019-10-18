Feature: Check Mortgage Rates for customer changing lender to Nationwide
 In order to achievement
 As a type of newCustomer
 I want Mortgage Rates Retrieved
 So that these could appear on screen
 
 @Smoke
 Scenario: Check Mortgage products for Changing lender customer
  Given I am on Nationwide Homepage
    Then I should be able to verify Homepage title to "Nationwide Building Society | building society, nationwide"
  When I navigate from Mortgages to New mortgage customer: Mortgage rates
    Then I should see page heading as "Search for a Nationwide mortgage"
  When I select "No" for having a Nationwide Mortgage
     And I select "Changing" Lender for Mortgage type
        And I input property value as "300000" Mortgage amount as "150000" term as "30" yrs to find available products
          And I filter the results based on "Fixed" Mortgage type and "With" fee
  Then I should see the result for 2, 3, 5 and 10 yrs Fixed products
    When I apply for 5 year fixed
      Then I should navigate to "Start your Remortgage application"
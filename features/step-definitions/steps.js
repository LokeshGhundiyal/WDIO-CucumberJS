const {Given, When, Then } = require('cucumber')
import assert from 'assert';
import allureReporter from '@wdio/allure-reporter';
import HomePage from '../PageClasses/HomePage';
import SearchForNationwideMortgage from '../PageClasses/SearchForNationwideMortgage';
import RemortgageApplication from '../PageClasses/RemortgageApplication';


Given("I am on Nationwide Homepage", function(){
    HomePage.Open();    
});

Then("I should be able to verify Homepage title to {string}", function(homePageTitle){
    assert.strictEqual(HomePage.verifyPageTitle(), homePageTitle)
});

When("I navigate from Mortgages to New mortgage customer: Mortgage rates", function(){
    HomePage.navigateToNewCustomerMortgageRate();
});

Then("I should see page heading as {string}", function(searchMortgageTitle){
    assert.strictEqual(SearchForNationwideMortgage.getPageHeading(), searchMortgageTitle);
});

When("I select {string} for having a Nationwide Mortgage", function(haveNWMortgage){
    SearchForNationwideMortgage.selectHaveNWMortgage(haveNWMortgage);
});

When("I select {string} Lender for Mortgage type", function(mortgageType){
    SearchForNationwideMortgage.selectTypeOfMortgageRequired(mortgageType);
});

When("I input property value as {string} Mortgage amount as {string} term as {string} yrs to find available products", function(propertyValue, mortageAmount, term){
    SearchForNationwideMortgage.fillInMortgageDetails(propertyValue, mortageAmount, term);
});

When("I input property value as {int} Mortgage amount as {int} term as {int} yrs to find available products", function(propertyValue, mortageAmount, term){
    SearchForNationwideMortgage.fillInMortgageDetails(propertyValue, mortageAmount, term);
});

When("I filter the results based on {string} Mortgage type and {string} fee", function(type, fee){
    SearchForNationwideMortgage.inputMortgageType(type);
    SearchForNationwideMortgage.inputProductFee(fee);
});

Then("I should see the result for 2, 3, 5 and 10 yrs Fixed products", function(){
    assert.strictEqual(SearchForNationwideMortgage.tr2YearFixed.isDisplayed(), true);
    assert.strictEqual(SearchForNationwideMortgage.tr3YearFixed.isDisplayed(), true);
    assert.strictEqual(SearchForNationwideMortgage.tr5YearFixed.isDisplayed(), true);
    assert.strictEqual(SearchForNationwideMortgage.tr10YearFixed.isDisplayed(), true);        
});

When("I apply for 5 year fixed", function(){
    SearchForNationwideMortgage.applyFor5YearFixedMortgage();
});

Then("I should navigate to {string}", function(remortgagePageTitle){
    assert.strictEqual(RemortgageApplication.pageHeading(), remortgagePageTitle);
});
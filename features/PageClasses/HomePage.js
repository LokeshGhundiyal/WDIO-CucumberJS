import BaseClass from "./BaseClass";

class HomePage extends BaseClass {
    //Creating elements based using elements properties
    get lMortgageLink () { return $('a=Mortgages')}; 
    get lMortgageRates () { return $('a=Mortgage rates')};

    //Launching application from Base Class
    Open(){
      this.launchApplication();
      this.lMortgageLink.waitForExist(25000);    
    }

    //Extracting Home Page Title
    verifyPageTitle(){
        return browser.getTitle();
    }

    //navigate to Customer Mortgage Rate page
    navigateToNewCustomerMortgageRate(){
        this.lMortgageLink.moveTo();
        this.lMortgageRates.click();
    }

}
export default new HomePage();
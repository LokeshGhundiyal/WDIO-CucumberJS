import BaseClass from "./BaseClass";

class SearchForNationwideMortgage extends BaseClass {
    //Creating elements based using elements properties
    get rbNWMortgageYes () { return $('.selector__group').$('span=Yes')};
    get rbNWMortgageNo () { return $('.selector__group').$('span=No')};
    get rbMortgageTypeChanging () { return $('#selectorItemNationwideMortgageTypeNo2')};
    get txtPropertyValue () { return $('#SearchPropertyValue')};
    get txtMortgageAmount () { return $('#SearchMortgageAmount')};
    get txtMortgageTerm () { return $('#SearchMortgageTerm')};
    get btnFindMortgageRate () { return $('#myButton')};
    get cbxMortgageTypeFixed () { return $('[for="input-fixed"]')};
    get cbxMortgageTypeWithFee () { return $('[data-di-id="#gen_withFee"]')};
    get tr2YearFixed () { return $('[data-product-name="2 yr  Fixed "]')};
    get tr3YearFixed () { return $('[data-product-name="3 yr  Fixed "]')};
    get tr5YearFixed () { return $('[data-product-name="5 yr  Fixed "]')};
    get tr10YearFixed () { return $('[data-product-name="10 yr  Fixed "]')};
    get lMoreInfoFor5yrFixed() { return $('[data-product-name="5 yr  Fixed "]').$('span=More info and apply')};
    get lApplyFor5yrFixed () { return $('[data-productname="5 yr Fixed "]')};
    get ePageHeading () { return $('h1')};
    get eSearchContinuing() { return $('h3=Searching our range of mortgages...')};
    get eUpdatingResults() { return $('h3=Updating results...')};

    

    //various methods based logical set of steps
    selectHaveNWMortgage(haveMortgage){
        if (haveMortgage.toUpperCase()=="YES"){
            this.rbNWMortgageYes.click();
        }
        else{
            this.rbNWMortgageNo.click();
        }
    }

    //selecting type of mortgage required based on input
    selectTypeOfMortgageRequired(mortgageType){
        switch (mortgageType.toUpperCase()) {
            case 'CHANGING':{
                this.rbMortgageTypeChanging.click();
                break;
            }
            case 'MOVING':{
                //object to be selected for 'I'm moving home ' can be added here
                break;
            }
            default :{
                //object to be selected for 'I'm buying my first home ' can be added here
            }
        }
    }

    fillInMortgageDetails(propertyValue, mortgageValue, term){
        this.txtPropertyValue.setValue(propertyValue);
        this.txtMortgageAmount.setValue(mortgageValue);
        this.txtMortgageTerm.setValue(term);
        this.btnFindMortgageRate.click();
        this.tr2YearFixed.waitForDisplayed(30000);
    }

    inputMortgageType(mortgageType){
        if (mortgageType.toUpperCase() == "FIXED"){            
            this.cbxMortgageTypeFixed.click();            
            this.eUpdatingResults.waitForExist(5000, false);
        }else{
            //statement to select Tracker rate can be added here
        }
    }

    inputProductFee(productFee){
        if (productFee.toUpperCase() == "WITH"){
            //this.cbxMortgageTypeWithFee.waitForEnabled(15000);
            this.cbxMortgageTypeWithFee.click();
            this.eUpdatingResults.waitForExist(5000, false);
        }else{
            //statement to select without fee type can be added here
        }
    }

    applyFor5YearFixedMortgage(){
        this.lMoreInfoFor5yrFixed.click();
        this.lApplyFor5yrFixed.click();        
    }

    getPageHeading(){
        return this.ePageHeading.getText();
    }
}

export default new SearchForNationwideMortgage();
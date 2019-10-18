import BaseClass from "./BaseClass";

class RemortgageApplication extends BaseClass{
    get eHeading () { return $('h1')};

    pageHeading () {
        return this.eHeading.getText();
    }
}
export default new RemortgageApplication();
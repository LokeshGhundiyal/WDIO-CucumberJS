import EnvironmentVariables from './EnvironmentVariables';
import allureReporter from '@wdio/allure-reporter';

class BaseClass {

    launchApplication() {        
        browser.url(EnvironmentVariables.URL);
        browser.deleteAllCookies();
        browser.maximizeWindow();
    }
}
export default BaseClass;
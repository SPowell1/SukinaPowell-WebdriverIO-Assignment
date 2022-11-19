
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class signupPage extends Page {

    //Getters
    get inputFname(){
        return $('#firstname');
    }

    get inputLname(){
        return $('#lastname');
    }

    get inputEmailAddress(){
        return $('#email_address');
    }

    get inputPword(){
        return $('#password');
    }

    get inputConfirmPword(){
        return $('#password-confirmation');
    }

    get btnCreateAcct(){
        return $(`//button[@title='Create an Account']//span`);
    }

    //Getters for Error- blank required fields
    get fNameBlankSignupErr(){ 
        return $('#firstname-error');
    }

    get lNameBlankSignupErr(){ 
        return $('#lastname-error');
    }

    get eAddrBlankSignupErr(){ 
        return $('#email_address-error');
    }

    get pWordBlankSignupErr(){ 
        return $('#password-error');
    }

    get pWordConfirmBlankSignupErr(){ 
        return $('#password-confirmation-error');
    }

    //Getter for Mismatch Password Error during signup

    get mismatchedPwordErr(){ 
        return $('#password-confirmation-error');
    }

    //Getter for Mismatch Password Error during signup

    get invalidEaddrErr(){ 
        return $('#password-confirmation-error');
    }

    //Getter duplicate Account Error
    get duplicateAcctErr(){
        return $(`[role='alert']`);
    }

    //Getter for Newsletter Checkbox element
    get newsletterCheckbox(){
        return $('.checkbox');
    }

    // get newsletterSubcribedMsg(){
    //     return $(`//p[@class='cf-tweet-this cf-tt-target cf-tt-element-attached-bottom cf-tt-element-attached-center cf-tt-target-attached-top cf-tt-target-attached-center']`);

    // }

    /*
    Get Sign out Btn
    Step 1: Access the dropdown menu using the upside arrow next to the welcome message
    Step 2: Locate signout btn
    */

    //Access the dropdown menu using the upside arrow next to the welcome message
    get signoutMenuDropdownBtn(){
        return $(`header ul button[type='button']`);
    }

    //locate signout btn
    get signoutBtn(){
        return $(`div[aria-hidden='false'] li[data-label='or'] a`);
    }

    //Automation code to interact with sign up page

    async signup(fName, lName, eAddress, pWord, pWordConfirm){
        await this.inputFname.setValue(fName);
        await this.inputLname.setValue(lName);
        await this.inputEmailAddress.setValue(eAddress);
        await this.inputPword.setValue(pWord);
        await this.inputConfirmPword.setValue(pWordConfirm);
        await this.newsletterCheckbox.click();
        await this.btnCreateAcct.click();
    }

    //Automate Signout Process
   async signout(){
    await this.signoutMenuDropdownBtn.isDisplayedInViewport();
    await this.signoutMenuDropdownBtn.click();
    await this.signoutBtn.click();
    await browser.pause(6000);
}

    open(){
        return super.open(`customer/account/create/`);
    }

}

module.exports = new signupPage ();
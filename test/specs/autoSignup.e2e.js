const signupData = require ('../data/signupData');
const signupPage = require('../pageobjects/signup.page');


describe('Auto Signup Process for Multiple persons',() =>{
    for (const record of signupData) {

        it(`should auto signup ${record.fName}`, async () => {
            await signupPage.open();
            await signupPage.signup(record.fName, record.lName, record.eAddress, record.pWord, record.pWordConfirm);
            await expect(browser).toHaveUrl(record.expectedUrl);
            await signupPage.signout();//once signup is successful on a record, the user should be logged out to allow for the signup of another person
             
        });

        it(`should fail auto signup based on mismatched password ${record.fName}`,async ()=>{
            await signupPage.open();
            await signupPage.signup(record.fName, record.lName, record.eAddress, record.pWord, record.pWordConfirm);
            await expect(browser).toHaveUrl(record.expectedUrl);
            await expect (signupPage.mismatchedPwordErr).toHaveTextContaining(record.message);
            //await window.location.reload();

        });

        it(`should fail auto signup based on blank email field ${record.fName}`,async ()=>{
            await signupPage.open();
            await signupPage.signup(record.fName, record.lName, record.eAddress, record.pWord, record.pWordConfirm);
            await expect(browser).toHaveUrl(record.expectedUrl);
            await expect (signupPage.eAddrBlankSignupErr).toHaveTextContaining(record.message);

        });
    }
    
});
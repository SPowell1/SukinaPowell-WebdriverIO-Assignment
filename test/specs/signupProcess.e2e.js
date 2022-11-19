const signupPage = require('../pageobjects/signup.page');
const myAcctPage = require('../pageobjects/myAccount.page');



describe('Signup Process Test Suite', () => {
    it('should signup successfully', async () => {
        
        await signupPage.open();
        await signupPage.signup('Edward', 'Baugh', 'Edwardbaughwsat@gmail.com','EdLovesWriting21','EdLovesWriting21');
        const mainColumn= await $('.column.main');//Locating the main element where the Newsletter text is located
                
        await expect(myAcctPage.successMsg).toBeExisting();
        await expect(myAcctPage.successMsg).toHaveTextContaining(
            'Thank you for registering with Fake Online Clothing Store');
        await expect(mainColumn).toHaveTextContaining(`You are subscribed to "General Subscription"`);
        await signupPage.signout();//once signup is successful on a record, the user should be logged out to allow for the signup of another person
    });

    it('should fail signup- account already exists',async()=>{
        await signupPage.open();
        await signupPage.signup('William', 'Shakespeare', 'williamshakespeare@gmail.com','WillShakes21','WillShakes21');
        await expect(signupPage.duplicateAcctErr).toBeDisplayedInViewport();

    });
});



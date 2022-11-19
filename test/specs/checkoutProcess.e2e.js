const loginPage = require('../pageobjects/login.page');
const checkoutPage = require('../pageobjects/checkout.page');

describe('Checkout Process Test Suite', ()=>{
    it('should attempt to complete the checkout process', async ()=>{

        //Login as a registered user with item added to cart
        await loginPage.open();

        await loginPage.login('annebronte@gmail.com','AnneWrites21');
        await browser.url('https://magento.softwaretestingboard.com/customer/account/');
        
        const minicartCounterBtn= $(`.counter-number`);
        await minicartCounterBtn.waitForDisplayed();


        /*
        Navigating to Proceed to Checkout Button
        Step 1: Locate minicart button and click it
        Step 2: Locate and click "Proceed to Checkout" button
        */
        const minicartBtn= await $(`body > div.page-wrapper > header > div.header.content > div.minicart-wrapper > a`);
        await minicartBtn.click();
        

        const proceed2CheckoutBtn= await $(`button[title='Proceed to Checkout']`);
        await proceed2CheckoutBtn.click();

        await checkoutPage.open();
        await checkoutPage.inputStreetAddrs.waitForDisplayed();
        await checkoutPage.checkoutFill('21 This Way', 'Kingston', 'New York', '12401', 'United States', '845845845');
      
        const successPageTitle= await $(`//span[@data-ui-id='page-title-wrapper']`); //get title of order success page
        
        await expect(successPageTitle).toHaveTextContaining('Thank you for your purchase!'); 

    });


});
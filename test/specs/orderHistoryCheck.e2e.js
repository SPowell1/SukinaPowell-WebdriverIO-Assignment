const loginPage = require('../pageobjects/login.page');
const orderHistoryPage = require('../pageobjects/orderHistory.page');

describe('Order History Test Suite', ()=>{
    it('should check if the order made is in history', async ()=>{

        //Login with existing user who has made a purchase
        await loginPage.open();

        await loginPage.login('fredjackson@gmail.com','Freddie21');
        await browser.url('https://magento.softwaretestingboard.com/#');

        //Go to order history
        await orderHistoryPage.open();
        await orderHistoryPage.goToOrderHistory();

        const orderNum= await $('tbody tr:nth-child(1) td:nth-child(1)');
        
        await expect (orderNum).toHaveTextContaining('000005185');
    });

});
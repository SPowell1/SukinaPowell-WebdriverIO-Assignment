const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class orderHistoryPage extends Page {

    
    get myOrderBtn(){
        return $(`li[class='nav item current'] strong`);
    }

    //navigate to order history
    async goToOrderHistory(){
        await this.myOrderBtn.click();
        await browser.url('https://magento.softwaretestingboard.com/sales/order/history/');
    }

    open () {
        return super.open('customer/account/');
    }

};

module.exports = new orderHistoryPage();


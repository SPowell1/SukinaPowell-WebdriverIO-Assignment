const Page = require ('./page');

//Selector definition getter methods
//Page after successful sign up

class shopSalesPage extends Page {
  
    get btnWomensDeals(){
        return $(`.more.button`)
    }

    get btnTeesSales(){
        return $(`a[class='block-promo sale-womens-t-shirts'] span[class='more icon']`)
    }

    async goToShopTees(){
        await this.btnTeesSales.click();
        await browser.url(`https://magento.softwaretestingboard.com/women/tops-women/tees-women.html`);
    }

    async goToShopWomensDeals(){
        await this.btnWomensDeals.click();
        await browser.url(`https://magento.softwaretestingboard.com/promotions/women-sale.html`);
    }

    open(){
        return super.open('sale.html');
     }

}
module.exports= new shopSalesPage();
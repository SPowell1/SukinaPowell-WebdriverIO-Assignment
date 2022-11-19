const shopSalesPage = require('../pageobjects/shopSales.page');

describe('Add Items to cart', () =>{
    it('should attempt to add a single item to cart', async ()=>{
        await shopSalesPage.open();

        await shopSalesPage.goToShopWomensDeals();

        const bessYogaShortsBtn= await $(`img[alt='Bess Yoga Short']`);
        await bessYogaShortsBtn.click();
        await browser.url('https://magento.softwaretestingboard.com/bess-yoga-short.html');
        /*
        Adding Bess Yoga Shorts (BYS) Item to Cart
        Step 1: Select Color
        Step 2: Select Size
        Step 3: Click Add to Cart button on Item
        */

        //Selecting Item Size
        const BessYogaShortSizeBtn= await $(`div[aria-label='31']`); 
        await BessYogaShortSizeBtn.click();

        //Selecting Item Color
        const BessYogaShortsColorBtn= await $(`div[aria-label='Purple']`);
        await BessYogaShortsColorBtn.click();

        //BYS add to cart
        const BYSadd2Cart= await $(`button[title='Add to Cart'] `);
        await BYSadd2Cart.click();

        // Checking if item was added to cart by checking the success message on screen
        
        const successMsg= await $(`div[data-bind='html: $parent.prepareMessageForHtml(message.text)']`);
        await expect (successMsg).toHaveTextContaining(`You added Bess Yoga Short to your `);


    });

});
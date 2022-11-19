const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class checkoutPage extends Page {

    /*
    Get checkout Page fields
    Step 1: Get shipping address Fields
    Step 2: Get Review &Payments Fields
    */

   //Shipping Address Fields
    get inputStreetAddrs(){
        return $(`input[name='street[0]']`);
    }

    get inputCity(){
        return $(`input[name='city']`);
    }

    get inputStateProvince(){
        return $(`select[name='region_id']`);
    }

    get inputZipPC(){
        return $(`input[name='postcode']`);
    }

    get inputCountry(){
        return $(`select[name='country_id']`);
    }

    get inputPhoneNumber(){
        return $(`input[name='telephone']`);
    }
    
    get shippingMethodRadioBtn(){
        return $(`input[value='flatrate_flatrate']`);
    }

    get nextBtn(){
        return $(`.button.action.continue.primary`)
    }

    //Get Review & Payment Fields

    get placeOrderBtn(){
        return $(`span[data-bind="i18n: 'Place Order'"]`);
    }

    get addressCheckBox(){
        return $(`#billing-address-same-as-shipping-checkmo`);
    }

    //Automate fill checkout fields 
    async checkoutFill(streetAddrs, city, State, zipCode, country, phoneNum){
        await this.inputStreetAddrs.setValue(streetAddrs);
        await this.inputCity.setValue(city);
        await this.inputStateProvince.selectByAttribute(`data-title`,State);
        await this.inputZipPC.setValue(zipCode);
        await this.inputCountry.selectByAttribute(`data-title`,country);
        await this.inputPhoneNumber.setValue(phoneNum);
        await this.shippingMethodRadioBtn.click();
        await this.nextBtn.click();
        await browser.url('https://magento.softwaretestingboard.com/checkout/#payment');

        //Ensure the checkbox for same Billing & Shipping address is checked then click Place Order Button
        if (this.addressCheckBox.isSelected()){
            await this.placeOrderBtn.click();
        }else{
            await this.addressCheckBox.click();
            await this.placeOrderBtn.click();
        }    
    }
    open () {
        return super.open('checkout/#shipping');
    }
}

module.exports = new checkoutPage();
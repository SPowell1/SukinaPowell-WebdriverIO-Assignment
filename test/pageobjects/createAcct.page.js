
const Page = require('./page');

class createAcctPage extends Page{

    get btnCreateAcct(){
        return $('header li:nth-child(3) a:nth-child(1)');
    }

    async clickCreateAcctBtn (){
        await this.btnCreateAcct.click();
    }

 open(){
        return super.open();
    }

}
module.exports= new createAcctPage();
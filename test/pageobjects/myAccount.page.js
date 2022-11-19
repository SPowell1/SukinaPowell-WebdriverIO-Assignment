const Page = require ('./page');

//Selector definition getter methods
//Page after successful sign up

class myAcctPage extends Page {
    get successMsg(){
        return $(`//div[@class='message-success success message']`);
    }
}
module.exports= new myAcctPage();
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {

    //Get email, Password and sign in button
    get email(){
        return $(`//input[@title='Email']`);
    }

    get password(){
        return $(`//input[@title='Password']`);
    }

    get btnSignin(){
        return $(`button[class='action login primary']`);
    }


    //Automate Login Process
    async login(eAddrs, pWord){
        await this.email.setValue(eAddrs);
        await this.password.setValue(pWord);
        await this.btnSignin.click();

    }

        open () {
        return super.open('customer/account/login');
    }
}

module.exports = new LoginPage();


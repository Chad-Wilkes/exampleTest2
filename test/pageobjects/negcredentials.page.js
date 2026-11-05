import { $ } from '@wdio/globals'
import Page from './page.js';

class NegCredentialsPage extends Page {

    credentials = {
        users:[ "standard_user", "locked_out_user", "problem_user", "performance_glitch_user", "error_user", "visual_user"],
        password: "secretsauce"
    }

    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('.submit-button.btn_action');
    }


    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    open () {
        return super.open();
    }
}

export default new NegCredentialsPage();

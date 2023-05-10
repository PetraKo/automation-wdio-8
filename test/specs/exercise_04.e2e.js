import {username, password} from './fixtures.js'
// import LoginPage from '../pageobjects/login.page'
// import ApplicationsPage from '../pageobjects/applications.page'

describe('Czechitas Login Page', async () => {
    it('should open login page', async () => {

        await browser.reloadSession();
        await browser.url('/prihlaseni');
    
        //zjištění stavu políčka e-mail
        const emailField = $('#email');
        console.log('Email field is displayed: ' + await emailField.isDisplayed());
    
        //zapsání hodnoty do políčka e-mail
        await emailField.setValue('muj-email@czechitas.cz');
        await browser.pause(2000);
        console.log('Zapsal jsem do políčka email tuto hodnotu: ' + await emailField.getValue());
        await browser.pause(2000);
    
        //zjištění stavu políčka password
        const passwordField = $('#password');
        console.log('Password field is displayed: ' + await passwordField.isDisplayed());
    
        //zapsání hodnoty do políčka e-password
        await passwordField.setValue('Czechitas123');
        await browser.pause(2000);
        console.log('Zapsal jsem do políčka password tuto hodnotu: ' + await passwordField.getValue());
        await browser.pause(2000);
    
        //výpis atributu href odkazu a zapomenuté heslo
        const link = $('form').$('a').getAttribute('href');
        console.log('Forgot password? link: ' + await link);
    
        //nalezení login buttonu
        const loginButton = $('.btn-primary');
        console.log('Našel jsem loginButton');
    
        //přihlášení
        await loginButton.click();

    });

});


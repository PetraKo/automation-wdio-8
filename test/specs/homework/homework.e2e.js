//import { password } from "../fixtures.js";
//import {} from '../homework/hw_preparation'


describe('Homework', async () => {

    beforeEach(async () => {    
        await browser.reloadSession();
        await browser.url('/registrace');
        const header = await $('h1');
        await expect(header).toHaveText('Registrace');
        
    });

    it.only('should open registration page and check fields availability', async () => {

        
        // Domácí úkol č. 1
        //Test č. 1 - Otevření stránky registrace a screenshot ze stránky

        await browser.saveScreenshot('.screenshotRegistrace.png');
        await browser.pause(5000);

         //Domácí úkol č. 2
         //Test č. 1 - Kontrola políček a tlačítek na stránce registrace a zjištění jejich dostupnosti

        const name = await $('#name');
        await expect(name).toBeDisplayed();
        await expect(name).toBeEnabled();

        const email = await $('#email');
        await expect(email).toBeDisplayed();
        await expect(email).toBeEnabled();

        const password = await $('#password');
        await expect(password).toBeDisplayed();
        await expect(password).toBeEnabled();

        const confirmPassword = await $('#password-confirm');
        await expect(confirmPassword).toBeDisplayed();
        await expect(confirmPassword).toBeEnabled();

        const registrationButton = await $('.btn-primary');
        await expect(registrationButton).toBeDisplayed();
        await expect(registrationButton).toBeEnabled();

        // console.log('Name field is displayed: ' + await name.isDisplayed());
        // console.log('Name field is enabled: ' + await name.isEnabled());

        // console.log('Email field is displayed: ' + await email.isDisplayed());
        // console.log('Email field is enabled: ' + await email.isEnabled());

        // console.log('Password field is displayed: ' + await password.isDisplayed());
        // console.log('Password field is enabled: ' + await password.isEnabled());

        // console.log('Confirm password field is displayed: ' + await confirmPassword.isDisplayed());
        // console.log('Confirm password field is enabled: ' + await confirmPassword.isEnabled());

        // console.log('Registration button is displayed: ' + await registrationButton.isDisplayed());
        // console.log('Registration button is enabled: ' + await registrationButton.isEnabled());
        

    });

        
    it('should successfully register new user', async () => {

        const name = await $('#name');
        const email = await $('#email');
        const password = await $('#password');
        const confirmPassword = await $('#password-confirm');
        const registrationButton = await $('.btn-primary');

        const name = ('Petra Koliskova');
        const email = ('petra123@seznam.cz');
        const password = ('Heslo123');
        
        // Domácí úkol č. 3
        //Test č. 2 - Registrace nového uživatele do systému

        await name.setValue(name);
        await browser.pause(2000);
        console.log('Zapsal jsem do políčka "name" tuto hodnotu: ' + await name.getValue());
        await browser.pause(2000);

        await email.setValue(email);
        await browser.pause(2000);
        console.log('Zapsal jsem do políčka "email" tuto hodnotu: ' + await email.getValue());
        await browser.pause(2000);

        await password.setValue(password);
        await browser.pause(2000);
        console.log('Zapsal jsem do políčka "password" tuto hodnotu: ' + await password.getValue());
        await browser.pause(2000);

        await confirmPassword.setValue(password);
        await browser.pause(2000);
        console.log('Zapsal jsem do políčka "confirm password" tuto hodnotu: ' + await confirmPassword.getValue());
        await browser.pause(2000);

        await registrationButton.click();
       
        const navbarRight = $('.navbar-right')
        const userNameDropdown = navbarRight.$('[data-toggle="dropdown"]');
    
        console.log('User currently logged in: ' + await userNameDropdown.getText());

    });
    

    it('should try to register again already existing user', async () => {

        const name = await $('#name');
        const email = await $('#email');
        const password = await $('#password');
        const confirmPassword = await $('#password-confirm');
        const registrationButton = await $('.btn-primary');

        const name = ('Petra Koliskova');
        const email = ('petra123@seznam.cz');
        const password = ('Heslo123');
        
        // Domácí úkol č. 4
        //Test č. 3 - Registrace uživatele, který už v systému existuje

        await name.setValue(name);
        await browser.pause(2000);
        console.log('Zapsal jsem do políčka "name" tuto hodnotu: ' + await name.getValue());
        await browser.pause(2000);

        await email.setValue(email);
        await browser.pause(2000);
        console.log('Zapsal jsem do políčka "email" tuto hodnotu: ' + await email.getValue());
        await browser.pause(2000);

        await password.setValue(password);
        await browser.pause(2000);
        console.log('Zapsal jsem do políčka "password" tuto hodnotu: ' + await password.getValue());
        await browser.pause(2000);

        await confirmPassword.setValue(password);
        await browser.pause(2000);
        console.log('Zapsal jsem do políčka "confirm password" tuto hodnotu: ' + await confirmPassword.getValue());
        await browser.pause(2000);

        await registrationButton.click();

        const toastTitle = await $('.toast-title');
        await toastTitle.waitForDisplayed();
        console.log(await toastTitle.getText());

        const toastMessage = await $('.toast-message');
        await toastMessage.waitForDisplayed();
        console.log(await toastMessage.getText());

        const invalidFeedbackSelector = await $('.invalid-feedback');
        await invalidFeedbackSelector.waitForDisplayed();
        console.log(await invalidFeedbackSelector.getText());

    });

    it('should try to register user with invalid password format', async () => {

        const name = await $('#name');
        const email = await $('#email');
        const password = await $('#password');
        const confirmPassword = await $('#password-confirm');
        const registrationButton = await $('.btn-primary');

        const name = ('Petra Koliskova');
        const email = ('petra124@seznam.cz');
        const password = ('123');
        
        // Domácí úkol č. 4
        //Test č. 4 - Registrace uživatele, který zadá nevalidní formát hesla

        await name.setValue(name);
        await browser.pause(2000);
        console.log('Zapsal jsem do políčka "name" tuto hodnotu: ' + await name.getValue());
        await browser.pause(2000);

        await email.setValue(email);
        await browser.pause(2000);
        console.log('Zapsal jsem do políčka "email" tuto hodnotu: ' + await email.getValue());
        await browser.pause(2000);

        await password.setValue(password);
        await browser.pause(2000);
        console.log('Zapsal jsem do políčka "password" tuto hodnotu: ' + await password.getValue());
        await browser.pause(2000);

        await confirmPassword.setValue(password);
        await browser.pause(2000);
        console.log('Zapsal jsem do políčka "confirm password" tuto hodnotu: ' + await confirmPassword.getValue());
        await browser.pause(2000);

        await registrationButton.click();

        const toastTitle = await $('.toast-title');
        await toastTitle.waitForDisplayed();
        console.log(await toastTitle.getText());

        const toastMessage = await $('.toast-message');
        await toastMessage.waitForDisplayed();
        console.log(await toastMessage.getText());

        const invalidFeedbackSelector = await $('.invalid-feedback');
        await invalidFeedbackSelector.waitForDisplayed();
        console.log(await invalidFeedbackSelector.getText());

    });

        //Domácí úkol č. 4
        //Odhlášení uživatele

        it('should logout', async () => {
            const emailField = $('#email');
            const passwordField = $('#password');
            const loginButton = $('.btn-primary');
            const navbarRight = $('.navbar-right')
            const userNameDropdown = navbarRight.$('[data-toggle="dropdown"]');
            const logoutLink = $('#logout-link');
    
            await emailField.setValue(username);
            await passwordField.setValue(password);
            await loginButton.click();
    
            console.log('User currently logged in: ' + await userNameDropdown.getText());
    
            await userNameDropdown.click();
            await logoutLink.click();
    
            console.log('User is logged in: ' + await userNameDropdown.isDisplayed());
            console.log('Navbar text: ' + await navbarRight.getText());
        });



});

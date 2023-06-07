//import { passwordField } from "../fixtures.js";


describe('Homework', async () => {

    beforeEach(async () => {    
        await browser.reloadSession();
        await browser.url('/registrace');
        //const header = await $('h1');
        //await expect(header).toHaveText('Registrace');
        
    });

    it.only('should open registration page and check fields availability', async () => {

        
        // Domácí úkol č. 1
        //Test č. 1 - Otevření stránky registrace a screenshot ze stránky

        await browser.saveScreenshot('.screenshotRegistrace.png');
        await browser.pause(5000);

         //Domácí úkol č. 2
         //Test č. 1 - Kontrola políček a tlačítek na stránce registrace a zjištění jejich dostupnosti

        const nameField = await $('#nameField');
        await expect(nameField).toBeDisplayed();
        await expect(nameField).toBeEnabled();

        const emailField = await $('#emailField');
        await expect(emailField).toBeDisplayed();
        await expect(emailField).toBeEnabled();

        const passwordField = await $('#passwordField');
        await expect(passwordField).toBeDisplayed();
        await expect(passwordField).toBeEnabled();

        const confirmPasswordSelector = await $('#passwordField-confirm');
        await expect(confirmPasswordSelector).toBeDisplayed();
        await expect(confirmPasswordSelector).toBeEnabled();

        const registrationButton = await $('.btn-primary');
        await expect(registrationButton).toBeDisplayed();
        await expect(registrationButton).toBeEnabled();

        // console.log('Name field is displayed: ' + await nameField.isDisplayed());
        // console.log('Name field is enabled: ' + await nameField.isEnabled());

        // console.log('Email field is displayed: ' + await emailField.isDisplayed());
        // console.log('Email field is enabled: ' + await emailField.isEnabled());

        // console.log('Password field is displayed: ' + await passwordField.isDisplayed());
        // console.log('Password field is enabled: ' + await passwordField.isEnabled());

        // console.log('Confirm passwordField field is displayed: ' + await confirmPasswordField.isDisplayed());
        // console.log('Confirm passwordField field is enabled: ' + await confirmPasswordField.isEnabled());

        // console.log('Registration button is displayed: ' + await registrationButton.isDisplayed());
        // console.log('Registration button is enabled: ' + await registrationButton.isEnabled());
        

    });

        
    it('should successfully register new user', async () => {

        const nameField = await $('#nameField');
        const emailField = await $('#emailField');
        const passwordField = await $('#passwordField');
        const confirmPasswordField = await $('#passwordField-confirm');
        const registrationButton = await $('.btn-primary');

        const name = 'Petra Koliskova';
        const email = 'petra123@seznam.cz';
        const password = 'Heslo123';
        
        // Domácí úkol č. 3
        //Test č. 2 - Registrace nového uživatele do systému

        await nameField.setValue(name);
        await browser.pause(2000);
        console.log('Zapsal jsem do políčka "nameField" tuto hodnotu: ' + await nameField.getValue());
        await browser.pause(2000);

        await emailField.setValue(email);
        await browser.pause(2000);
        console.log('Zapsal jsem do políčka "emailField" tuto hodnotu: ' + await emailField.getValue());
        await browser.pause(2000);

        await passwordField.setValue(password);
        await browser.pause(2000);
        console.log('Zapsal jsem do políčka "passwordField" tuto hodnotu: ' + await passwordField.getValue());
        await browser.pause(2000);

        await confirmPasswordField.setValue(password);
        await browser.pause(2000);
        console.log('Zapsal jsem do políčka "confirm passwordField" tuto hodnotu: ' + await confirmPasswordField.getValue());
        await browser.pause(2000);

        await registrationButton.click();
       
        const navbarRight = $('.navbar-right')
        const userNameDropdown = navbarRight.$('[data-toggle="dropdown"]');
    
        console.log('User currently logged in: ' + await userNameDropdown.getText());

    });
    

    it('should try to register again already existing user', async () => {

        const nameField = await $('#nameField');
        const emailField = await $('#emailField');
        const passwordField = await $('#passwordField');
        const confirmPasswordField = await $('#passwordField-confirm');
        const registrationButton = await $('.btn-primary');

        const name = ('Petra Koliskova');
        const email = ('petra123@seznam.cz');
        const password = ('Heslo123');
        
        // Domácí úkol č. 4
        //Test č. 3 - Registrace uživatele, který už v systému existuje

        await nameField.setValue(name);
        await browser.pause(2000);
        console.log('Zapsal jsem do políčka "nameField" tuto hodnotu: ' + await nameField.getValue());
        await browser.pause(2000);

        await emailField.setValue(email);
        await browser.pause(2000);
        console.log('Zapsal jsem do políčka "emailField" tuto hodnotu: ' + await emailField.getValue());
        await browser.pause(2000);

        await passwordField.setValue(password);
        await browser.pause(2000);
        console.log('Zapsal jsem do políčka "passwordField" tuto hodnotu: ' + await passwordField.getValue());
        await browser.pause(2000);

        await confirmPasswordField.setValue(password);
        await browser.pause(2000);
        console.log('Zapsal jsem do políčka "confirm passwordField" tuto hodnotu: ' + await confirmPasswordField.getValue());
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

    it('should try to register user with invalid passwordField format', async () => {

        const nameField = await $('#nameField');
        const emailField = await $('#emailField');
        const passwordField = await $('#passwordField');
        const confirmPasswordField = await $('#passwordField-confirm');
        const registrationButton = await $('.btn-primary');

        const name = ('Petra Koliskova');
        const email = ('petra124@seznam.cz');
        const password = ('123');
        
        // Domácí úkol č. 4
        //Test č. 4 - Registrace uživatele, který zadá nevalidní formát hesla

        await nameField.setValue(name);
        await browser.pause(2000);
        console.log('Zapsal jsem do políčka "nameField" tuto hodnotu: ' + await nameField.getValue());
        await browser.pause(2000);

        await emailField.setValue(email);
        await browser.pause(2000);
        console.log('Zapsal jsem do políčka "emailField" tuto hodnotu: ' + await emailField.getValue());
        await browser.pause(2000);

        await passwordField.setValue(password);
        await browser.pause(2000);
        console.log('Zapsal jsem do políčka "passwordField" tuto hodnotu: ' + await passwordField.getValue());
        await browser.pause(2000);

        await confirmPasswordField.setValue(password);
        await browser.pause(2000);
        console.log('Zapsal jsem do políčka "confirm passwordField" tuto hodnotu: ' + await confirmPasswordField.getValue());
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
            const emailField = $('#emailField');
            const passwordField = $('#passwordField');
            const loginButton = $('.btn-primary');
            const navbarRight = $('.navbar-right')
            const userNameDropdown = navbarRight.$('[data-toggle="dropdown"]');
            const logoutLink = $('#logout-link');
    
            await emailField.setValue(username);
            await passwordField.setValue(passwordField);
            await loginButton.click();
    
            console.log('User currently logged in: ' + await userNameDropdown.getText());
    
            await userNameDropdown.click();
            await logoutLink.click();
    
            console.log('User is logged in: ' + await userNameDropdown.isDisplayed());
            console.log('Navbar text: ' + await navbarRight.getText());
        });



});

//import { passwordField } from "../fixtures.js";


describe('Homework', async () => {

    beforeEach(async () => {    
        await browser.reloadSession();
        await browser.url('/registrace');
        
    });

    it('should open registration page and check fields availability', async () => {

        
        // Domácí úkol č. 1
        //Test č. 1 - Otevření stránky registrace a screenshot ze stránky

        await browser.saveScreenshot('.screenshotRegistrace.png');
        await browser.pause(5000);

         //Domácí úkol č. 2
         //Test č. 1 - Kontrola políček a tlačítek na stránce registrace a zjištění jejich dostupnosti

        const nameField = await $('#name');
        await expect(nameField).toBeDisplayed();
        await expect(nameField).toBeEnabled();

        const emailField = await $('#email');
        await expect(emailField).toBeDisplayed();
        await expect(emailField).toBeEnabled();

        const passwordField = await $('#password');
        await expect(passwordField).toBeDisplayed();
        await expect(passwordField).toBeEnabled();

        const confirmPasswordSelector = await $('#password-confirm');
        await expect(confirmPasswordSelector).toBeDisplayed();
        await expect(confirmPasswordSelector).toBeEnabled();

        const registrationButton = await $('.btn-primary');
        await expect(registrationButton).toBeDisplayed();
        await expect(registrationButton).toBeEnabled();

    });

        
    it('should successfully register new user', async () => {

        const nameField = await $('#name');
        const emailField = await $('#email');
        const passwordField = await $('#password');
        const confirmPasswordField = await $('#password-confirm');
        const registrationButton = await $('.btn-primary');

        const name = 'Petra Koliskova';
        const email = 'petra' + Math.floor((Math.random() * 100)) + '@seznam.cz';
        const password = 'Heslo123';
        
        // Domácí úkol č. 3
        //Test č. 2 - Registrace nového uživatele do systému

        await nameField.setValue(name);
        await expect(nameField).toHaveValue(name);

        await emailField.setValue(email);
        await expect(emailField).toHaveValue(email);

        await passwordField.setValue(password);
        await expect(passwordField).toHaveValue(password);

        await confirmPasswordField.setValue(password);
        await expect(confirmPasswordField).toHaveValue(password);

        await registrationButton.isDisplayed();
        await registrationButton.click();
        
        const navbarRight = $('.navbar-right')
        const userNameDropdown = navbarRight.$('[data-toggle="dropdown"]');

        await expect(userNameDropdown).toHaveText(name);

    });
    

    it('should try to register already existing user', async () => {

        const nameField = await $('#name');
        const emailField = await $('#email');
        const passwordField = await $('#password');
        const confirmPasswordField = await $('#password-confirm');
        const registrationButton = await $('.btn-primary');

        const name = ('Petra Koliskova');
        const email = ('petra123@seznam.cz');
        const password = ('Heslo123');
        
        // Domácí úkol č. 4
        //Test č. 3 - Registrace uživatele, který už v systému existuje

        await nameField.setValue(name);
        await expect(nameField).toHaveValue(name);

        await emailField.setValue(email);
        await expect(emailField).toHaveValue(email);

        await passwordField.setValue(password);
        await expect(passwordField).toHaveValue(password);

        await confirmPasswordField.setValue(password);
        await expect(confirmPasswordField).toHaveValue(password);

        await registrationButton.isDisplayed();
        await registrationButton.click();

        const toastTitle = await $('.toast-title');
        await toastTitle.waitForDisplayed();
        await expect (toastTitle).toBeDisplayed;
        await expect(toastTitle).toHaveText('Špatně zadané pole');

        const toastMessage = await $('.toast-message');
        await toastMessage.waitForDisplayed();
        await expect (toastMessage).toBeDisplayed;
        await expect(toastMessage).toHaveText('Některé pole obsahuje špatně zadanou hodnotu');

        const invalidFeedback = await $('.invalid-feedback');
        await invalidFeedback.waitForDisplayed();
        await expect(invalidFeedback).toBeDisplayed();
        await expect(invalidFeedback).toHaveText('Účet s tímto emailem již existuje');

    });

    it('should try to register user with invalid password format', async () => {

        const nameField = await $('#name');
        const emailField = await $('#email');
        const passwordField = await $('#password');
        const confirmPasswordField = await $('#password-confirm');
        const registrationButton = await $('.btn-primary');

        const name = ('Petra Koliskova');
        const email = 'petra' + Math.floor((Math.random() * 100)) + '@seznam.cz';
        const password = ('123');
        
        // Domácí úkol č. 4
        //Test č. 4 - Registrace uživatele, který zadá nevalidní formát hesla

        await nameField.setValue(name);
        await expect(nameField).toHaveValue(name);

        await emailField.setValue(email);
        await expect(emailField).toHaveValue(email);

        await passwordField.setValue(password);
        await expect(passwordField).toHaveValue(password);

        await confirmPasswordField.setValue(password);
        await expect(confirmPasswordField).toHaveValue(password);

        await registrationButton.isDisplayed();
        await registrationButton.click();

        const toastTitle = await $('.toast-title');
        await toastTitle.waitForDisplayed();
        await expect (toastTitle).toBeDisplayed;
        await expect(toastTitle).toHaveText('Špatně zadané pole');

        const toastMessage = await $('.toast-message');
        await toastMessage.waitForDisplayed();
        await expect (toastMessage).toBeDisplayed;
        await expect(toastMessage).toHaveText('Některé pole obsahuje špatně zadanou hodnotu');

        const invalidFeedback = await $('.invalid-feedback');
        await invalidFeedback.waitForDisplayed();
        await expect(invalidFeedback).toBeDisplayed();
        await expect(invalidFeedback).toHaveText('Heslo musí obsahovat minimálně 6 znaků, velké i malé písmeno a číslici');

    });


});

describe('Log-in & Log-out', async () => {

    beforeEach(async () => {    
        await browser.reloadSession();
        await browser.url('/prihlaseni');
        
    });
    
    //Přihlášení existujícího uživatele do systému
       
    it('Existing user should successfully log-in into the system', async () => {

        const emailField = await $('#email');
        const passwordField = await $('#password');
        const loginButton = await $('.btn-primary');
        const email = 'petra123@seznam.cz';
        const password = 'Heslo123';
        const name = 'Petra Koliskova';
    

        await emailField.setValue(email);
        await expect(emailField).toHaveValue(email);
        await passwordField.setValue(password);
        await expect(passwordField).toHaveValue(password);

        await expect(loginButton).toBeClickable();
        await loginButton.click();
       
        const navbarRight = $('.navbar-right')
        const userNameDropdown = navbarRight.$('[data-toggle="dropdown"]');

        await expect(userNameDropdown).toHaveText(name);

    });
    
    
    //Odhlášení uživatele ze systému

        it('User should be able to logout from the system', async () => {

            const emailField = $('#email');
            const passwordField = $('#password');
            const loginButton = $('.btn-primary');
            const navbarRight = $('.navbar-right')
            const userNameDropdown = navbarRight.$('[data-toggle="dropdown"]');
            const logoutLink = $('#logout-link');
            const username = ('petra123@seznam.cz');
            const password = ('Heslo123');
            const name = 'Petra Koliskova';

            //Přihlášení uživatele do systému
    
            await emailField.setValue(username);
            await expect(emailField).toHaveValue(username);

            await passwordField.setValue(password);
            await expect(passwordField).toHaveValue(password);

            await expect(loginButton).toBeClickable();
            await loginButton.click();
            
            await userNameDropdown.waitForDisplayed();
            await expect(userNameDropdown).toHaveText(name);

            //Odhlášení uživatele ze systému
    
            await expect(userNameDropdown).toBeClickable();
            await userNameDropdown.click();
            await expect(logoutLink).toBeClickable();
            await logoutLink.click();

            await expect(await userNameDropdown.isDisplayed()).toBeFalsy();
            await expect(await navbarRight.getText()).toEqual('Přihlásit');

        });


});
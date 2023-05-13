//import { password } from "../fixtures.js";

describe('Homework', async () => {

  beforeEach(async () => {
        await browser.reloadSession();
        await browser.url('/registrace');
    });

    it('should open registration page and check fields availability', async () => {

        const nameSelector = await $('#name');
        const emailSelector = await $('#email');
        const passwordSelector = await $('#password');
        const confirmPasswordSelector = await $('#password-confirm');
        const registrationButtonSelector = await $('.btn-primary');
        
        // Domácí úkol č. 1
        //Test č. 1 - Otevření stránky registrace a screenshot ze stránky

        await browser.saveScreenshot('.screenshotRegistrace.png');

         await browser.pause(5000);

         //Domácí úkol č. 2
         //Test č. 1 - Kontrola políček a tlačítek na stránce registrace a zjištění jejich dostupnosti

         console.log('Name field is displayed: ' + await nameSelector.isDisplayed());
         console.log('Name field is enabled: ' + await nameSelector.isEnabled());

         console.log('Email field is displayed: ' + await emailSelector.isDisplayed());
         console.log('Email field is enabled: ' + await emailSelector.isEnabled());

         console.log('Password field is displayed: ' + await passwordSelector.isDisplayed());
         console.log('Password field is enabled: ' + await passwordSelector.isEnabled());

         console.log('Confirm password field is displayed: ' + await confirmPasswordSelector.isDisplayed());
         console.log('Confirm password field is enabled: ' + await confirmPasswordSelector.isEnabled());

         console.log('Registration button is displayed: ' + await registrationButtonSelector.isDisplayed());
         console.log('Registration button is enabled: ' + await registrationButtonSelector.isEnabled());
        

    });

        
    it('should successfully register new user', async () => {

        const nameSelector = await $('#name');
        const emailSelector = await $('#email');
        const passwordSelector = await $('#password');
        const confirmPasswordSelector = await $('#password-confirm');
        const registrationButtonSelector = await $('.btn-primary');

        const name = ('Petra Koliskova');
        const email = ('petra123@seznam.cz');
        const password = ('Heslo123');
        
        // Domácí úkol č. 3
        //Test č. 2 - Registrace nového uživatele do systému

        // můžu použít await nameSelector.setValue(nameValue('Petra Koliskova')); - funkce nameValue?
        await nameSelector.setValue(name);
        await browser.pause(2000);
        console.log('Zapsal jsem do políčka "name" tuto hodnotu: ' + await nameSelector.getValue());
        await browser.pause(2000);

        await emailSelector.setValue(email);
        await browser.pause(2000);
        console.log('Zapsal jsem do políčka "email" tuto hodnotu: ' + await emailSelector.getValue());
        await browser.pause(2000);

        await passwordSelector.setValue(password);
        await browser.pause(2000);
        console.log('Zapsal jsem do políčka "password" tuto hodnotu: ' + await passwordSelector.getValue());
        await browser.pause(2000);

        await confirmPasswordSelector.setValue(password);
        await browser.pause(2000);
        console.log('Zapsal jsem do políčka "confirm password" tuto hodnotu: ' + await confirmPasswordSelector.getValue());
        await browser.pause(2000);

        await registrationButtonSelector.click();
        console.log('Vytvořil jsem registraci pro uživatele: ' + await nameSelector.getValue());

    });
    

    it('should try to register again already existing user', async () => {

        const nameSelector = await $('#name');
        const emailSelector = await $('#email');
        const passwordSelector = await $('#password');
        const confirmPasswordSelector = await $('#password-confirm');
        const registrationButtonSelector = await $('.btn-primary');

        const name = ('Petra Koliskova');
        const email = ('petra123@seznam.cz');
        const password = ('Heslo123');
        
        // Domácí úkol č. 4
        //Test č. 3 - Registrace uživatele, který už v systému existuje

        await nameSelector.setValue(name);
        await browser.pause(2000);
        console.log('Zapsal jsem do políčka "name" tuto hodnotu: ' + await nameSelector.getValue());
        await browser.pause(2000);

        await emailSelector.setValue(email);
        await browser.pause(2000);
        console.log('Zapsal jsem do políčka "email" tuto hodnotu: ' + await emailSelector.getValue());
        await browser.pause(2000);

        await passwordSelector.setValue(password);
        await browser.pause(2000);
        console.log('Zapsal jsem do políčka "password" tuto hodnotu: ' + await passwordSelector.getValue());
        await browser.pause(2000);

        await confirmPasswordSelector.setValue(password);
        await browser.pause(2000);
        console.log('Zapsal jsem do políčka "confirm password" tuto hodnotu: ' + await confirmPasswordSelector.getValue());
        await browser.pause(2000);

        await registrationButtonSelector.click();

        /*const toastTitle = $('#toast-title');
        await toastTitle.waitForDisplayed();
        console.log(await toastTitle.getText());

        const toastMessage = $('#toast-message');
        await toastMessage.waitForDisplayed();
        console.log(await toastMessage.getText()); */

        const invalidFeedbackSelector = $('#invalid-feedback'); //nenajde mi tento element na stránce, proč?
        await invalidFeedbackSelector.waitForDisplayed();
        console.log(await invalidFeedbackSelector.getText());

    });

    it('should try to register user with invalid password format', async () => {

        const nameSelector = await $('#name');
        const emailSelector = await $('#email');
        const passwordSelector = await $('#password');
        const confirmPasswordSelector = await $('#password-confirm');
        const registrationButtonSelector = await $('.btn-primary');

        const name = ('Petra Koliskova');
        const email = ('petra124@seznam.cz');
        const password = ('123');
        
        // Domácí úkol č. 4
        //Test č. 4 - Registrace uživatele, který zadá nevalidní formát hesla

        await nameSelector.setValue(name);
        await browser.pause(2000);
        console.log('Zapsal jsem do políčka "name" tuto hodnotu: ' + await nameSelector.getValue());
        await browser.pause(2000);

        await emailSelector.setValue(email);
        await browser.pause(2000);
        console.log('Zapsal jsem do políčka "email" tuto hodnotu: ' + await emailSelector.getValue());
        await browser.pause(2000);

        await passwordSelector.setValue(password);
        await browser.pause(2000);
        console.log('Zapsal jsem do políčka "password" tuto hodnotu: ' + await passwordSelector.getValue());
        await browser.pause(2000);

        await confirmPasswordSelector.setValue(password);
        await browser.pause(2000);
        console.log('Zapsal jsem do políčka "confirm password" tuto hodnotu: ' + await confirmPasswordSelector.getValue());
        await browser.pause(2000);

        await registrationButtonSelector.click();

        /*const toastTitle = $('#toast-title');
        await toastTitle.waitForDisplayed();
        console.log(await toastTitle.getText());

        const toastMessage = $('#toast-message');
        await toastMessage.waitForDisplayed();
        console.log(await toastMessage.getText()); */

        const invalidFeedbackSelector = $('#invalid-feedback'); //nenajde mi tento element na stránce, proč?
        await invalidFeedbackSelector.waitForDisplayed();
        console.log(await invalidFeedbackSelector.getText());

    });



});

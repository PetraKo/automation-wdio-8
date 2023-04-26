import {username, password} from './fixtures.js'
// import LoginPage from '../pageobjects/login.page'
// import ApplicationsPage from '../pageobjects/applications.page'

describe('Czechitas Login Page', async () => {

    it('should open login page', async () => {

        await browser.reloadSession();

        await browser.url('/prihlaseni');

        const windowSize = await browser.getWindowSize();
        console.log(windowSize);

        await browser.saveScreenshot("login_page.png");

        await browser.pause(5000);

        /* get element by Tag */

        const FormTagSelector = await $('form');
        console.log(await FormTagSelector.getHTML());

        const InputTagSelector = await $('#email');
        console.log(await InputTagSelector.getHTML());

        const ButtonTagSelector = await $('button');
        console.log(await ButtonTagSelector.getHTML());


        /* get element by Id */

        const EmailIdSelector = await $('#email');
        console.log(await EmailIdSelector.getHTML());

        const PasswordIdSelector = await $('#password');
        console.log(await PasswordIdSelector.getHTML());

        /* get Element by Class */

        const PasswordClassSelector = await $('.btn-primary');
        console.log(await PasswordClassSelector.getHTML());

       /* get Element by Attribute */
       
        const NameAttributeSelector = $('[name="email"]');
        console.log(await NameAttributeSelector.getHTML());

        const PasswordAttributeSelector = $('[type="password"]');
        console.log(await PasswordAttributeSelector.getHTML());

        // Attribute containing text "ass"

        const AttributeContaingTextSelector = $('[type*="ass"]');
        console.log(await AttributeContaingTextSelector.getHTML());

        // Attribute finishing with text "word"

        const AttributeFinishingWithTextSelector = $('[type$="word"]');
        console.log(await AttributeFinishingWithTextSelector.getHTML());

        // Attribute starting with text "pass"

        const AttributeStartingWithTextSelector = $('[type^="pass"]');
        console.log(await AttributeStartingWithTextSelector.getHTML());

       /* CSS Selectors: kombinovaný selector */
       const tagAndIdSelector = $('input#email');
       console.log(await tagAndIdSelector.getHTML());

       const tagAndAttributeSelector = $('input[type="password"]');
       console.log(await tagAndAttributeSelector.getHTML());

       const tagAndClassSelector = $('button.btn-primary');
       console.log(await tagAndClassSelector.getHTML());

       /*
       CSS Selectors: řetězení
        */
       const selectorChain = $('div').$('form').$('input[type$="word"]');
       console.log(await selectorChain.getHTML());

       /*
       Speciální WDIO selectory
        */
       const selectorByText = $('=Zapomněli jste své heslo?');
       console.log(await selectorByText.getHTML());
        

    });

});

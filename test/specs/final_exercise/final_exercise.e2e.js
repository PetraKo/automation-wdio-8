//import {dropdownProUzivatele, orderPage} from "./specs/fixtures.js";

describe('AppPage', async () => {

    beforeEach(async () => {
        await browser.reloadSession();
        await browser.url('/');
    });

    it('page "Pro uživatele" should be available for the user', async () => {

        const dropdownProUzivatele = $('.dropdown-toggle[href="https://team8-2022brno.herokuapp.com/pro-ucitele"]')
        
        await expect(dropdownProUzivatele).toBeDisplayed();
        await dropdownProUzivatele.click();

        const orderPage = $('.dropdown-item[href="https://team8-2022brno.herokuapp.com/objednavka/pridat"]')

        await expect(orderPage).toHaveText('Objednávka pro MŠ/ZŠ');
     
    });

    it('should allow user to create new order under "Pro uživatele" page', async () => {

        const dropdownProUzivatele = $('.dropdown-toggle[href="https://team8-2022brno.herokuapp.com/pro-ucitele"]')
        await dropdownProUzivatele.click();

        const orderPage = $('.dropdown-item[href="https://team8-2022brno.herokuapp.com/objednavka/pridat"]')
        await orderPage.click();

        await expect(orderPage);

    });

});
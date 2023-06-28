//import {dropdownProUzivatele, orderPage} from "./specs/fixtures.js";

const timestamp = Math.floor(Date.now() / 1000);
const ICO = 09243119;
const clientName = 'TIMME brand s.r.o.';
const address = 'Ovocný trh 572/11, Staré Město, 110 00 Praha';
const substituteName = 'Jméno Zástupce';
const contactName = 'Jméno Kontaktu';
const contactPhone = 774952432;
const contactEmail = `email-${timestamp}@czechitas.com`;
const startDate = '2023-05-02';
const endDate = '2023-05-12';

describe('Order for MŠ/ZŠ', async () => {

    beforeEach(async () => {
        await browser.reloadSession();
        await browser.url('/');
    });

    describe('Navigation', async () => {

        it('page "Pro uživatele" should be available for the user', async () => {

            // 1. možnost = vytvořit konstantu a pak si ji zavolat
            
            const dropdownProUzivatele = $('.dropdown-toggle[href="https://team8-2022brno.herokuapp.com/pro-ucitele"]')
            
            await expect(dropdownProUzivatele).toBeDisplayed();
            await dropdownProUzivatele.click();

            const orderPage = $('.dropdown-item[href="https://team8-2022brno.herokuapp.com/objednavka/pridat"]')

            await expect(orderPage).toHaveText('Objednávka pro MŠ/ZŠ');
        
        });

        it('should allow user to create new order under "Pro uživatele" page', async () => {

            // 1. možnost = vytvořit konstantu a pak si ji zavolat
           
            const dropdownProUzivatele = $('.dropdown-toggle[href="https://team8-2022brno.herokuapp.com/pro-ucitele"]')
            await dropdownProUzivatele.click();

            const orderPage = $('.dropdown-item[href="https://team8-2022brno.herokuapp.com/objednavka/pridat"]')
            await orderPage.click();

            await expect(orderPage);

            // 2. možnost = nevytvářet konstanty a rovnou pracovat s nalezeným elementem
            await $('*=Pro učitelé').click();
            await $('*=Objednávka pro MŠ/ZŠ').click();
            await expect($('h1')).toHaveText('Nová objednávka');

        });

    });

});
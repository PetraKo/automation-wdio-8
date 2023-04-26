describe('Homework', async () => {

    it('should open page and create screenshot', async () => {

        // sem vypracuj domácí úkol

        await browser.reloadSession();

        await browser.url('/prihlaseni');

        await browser.pause(5000);
        

    });

});

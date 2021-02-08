/// <reference types="cypress" />

import * as fs from 'fs'

//If a Json is recieved
const sites = '[{"url":"https://exa.unicen.edu.ar"},{"url": "https://google.com"}]';
const urls = JSON.parse(sites);
urls.forEach((site) => {
    describe('Testing: ' + site.url, () => {
        beforeEach(function() {
            cy.visit(site);
            cy.lighthouse({
                performance: 80
              })
        });

        it("test", () => {

        })
    });
});




    
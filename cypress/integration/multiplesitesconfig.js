/// <reference types="cypress" />

//If Jsons are written in config file
Cypress.config('sites').forEach((site) => {
    describe('Testing :' + site.url, () => {
        beforeEach(function() {
            cy.visit(site.url);
            cy.lighthouse({
                performance: 80
                })
        });
    
        it("test", () => {
    
        })
    });
});
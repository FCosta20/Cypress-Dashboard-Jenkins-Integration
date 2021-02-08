/// <reference types="cypress" />

import { forEach } from 'cypress/types/lodash';
import * as fs from 'fs'

//if excel is treated as a task

describe('Testing sites', () => {
    let index = 1;

    beforeEach(function() {
        cy.task('transform',{filename:'urls.xlsx',sheet:'Sheet1',cell:"A"+index}).then(value => {
            let url = value;
            cy.visit(url);
            cy.lighthouse({
                performance: 80
            })
        })
        index+=1;

    })

    it("test", () => {

    })
});

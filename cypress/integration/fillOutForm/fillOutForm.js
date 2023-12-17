/// <reference types="Cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../pageObjects/HomePage";

const homePage = new HomePage();
let twoWayBindingFName;

Given('I am on the home page', () => {
    cy.visit(Cypress.env('baseUrl') + '/angularpractice')
})

Then("I fill out name, email, gender and DOB", (dataTable) => {
    //retrieve data from feature file
    twoWayBindingFName = dataTable.rawTable[1][0]
    homePage.getNameField().type(twoWayBindingFName);
    homePage.getGender().select(dataTable.rawTable[1][1]);
    homePage.getEmailField().type(dataTable.rawTable[1][2]);
    homePage.getDOBField().type(dataTable.rawTable[1][3]);
})

Then("I validate the two way data binding", () => {
    homePage.getDataBinding().should('have.value', twoWayBindingFName);
})

Then("I validate the entrepreneur checkbox", () => {
    homePage.getEntrepreneur().should('be.disabled')
})

When('I click the submit form button', () => {
    homePage.getSubmitFormBtn().click();
})

Then('I can see the success msg', () => {
    homePage.getPurchaseSuccessText().should('contain.text', "Success");
})
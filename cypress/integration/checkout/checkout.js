/// <reference types="Cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import HomePage from "../pageObjects/HomePage";
import ProductPage from '../pageObjects/ProductPage';
import CheckoutSummaryPage from "../pageObjects/CheckoutSummaryPage";
import DeliveryPage from "../pageObjects/DeliveryPage";

const productPage = new ProductPage;
const homePage = new HomePage();
const checkoutSummaryPage = new CheckoutSummaryPage;
const deliveryPage = new DeliveryPage;

Given('I am on the e-com shop page', () => {
    cy.visit(Cypress.env('baseUrl') + '/angularpractice')
    homePage.getShopLink().click();
})

Then("I add items to cart", () => {
    data.products.forEach(element => {
        cy.selectProduct(element)
    });
})

Then("I validate the total price", () => {
    productPage.getCheckoutBtn().click();
    let sum = 0;
    checkoutSummaryPage.getProductPrice().each((el, index, list) => {
        const priceArray = el.text().split(" ");
        const value = priceArray[1].trim()
        sum = sum + Number(value)
    });
    checkoutSummaryPage.getCheckoutTotal().then((el) => {
        const totalPrice = el.text().split(" ")
        const total = Number(totalPrice[1].trim());
        expect(total).to.equal(sum)
    })
})

Then("Select the country and accepts Ts&Cs", () => {
    checkoutSummaryPage.getcheckoutBtn().click();
    deliveryPage.getCountry().type('Ger');
    deliveryPage.getFirstCountry().click();
    deliveryPage.getTandC().check(({ force: true }));
})

When('I click the purchase button', () => {
    deliveryPage.getPurchaseBtn().click();
})

Then('I can see the purchase success msg', () => {
    deliveryPage.getPurchaseSuccessText().should('contain.text', "Success")
})
before(() => {
    cy.fixture('productData').then(function (data) {
        globalThis.data = data;
    })

});
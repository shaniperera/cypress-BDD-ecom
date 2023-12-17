Feature: Checkout

    Checkout of products can be done

    Scenario: Checkout products in cart
    Given I am on the e-com shop page
    And I add items to cart
    And I validate the total price
    And Select the country and accepts Ts&Cs
    When I click the purchase button
    Then I can see the purchase success msg
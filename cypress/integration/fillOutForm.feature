Feature: Fill out form

    Fill out user details
    Scenario: Fill out user details and submit
    Given I am on the home page
    And I fill out name, email, gender and DOB
    # define test data to be used
    |name | gender | email      | DOB       |
    |Bob  | Male   |bob@test.com|2000-01-01 |
    And I validate the two way data binding
    And I validate the entrepreneur checkbox
    When I click the submit form button
    Then I can see the success msg
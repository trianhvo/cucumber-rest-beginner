Feature: Testing My Express API

  Scenario: Creating a new person
    Given I have the request in file "features/data/create-person-req.json"
    When I call the API POST 
    Then I have the response in file "features/data/create-person-res.json"

  Scenario: Updating a person's age
    Given I have the request in file "features/data/update-person-req.json"
    When I call the API PUT 
    Then I have the response in file "features/data/update-person-res.json"

  Scenario: Getting a person by ID
    Given I have the request in file "features/data/get-person-req.json"
    When I call the API GET 
    Then I have the response in file "features/data/get-person-res.json"

  Scenario: Deleting a person by ID
    Given I have the request in file "features/data/delete-person-req.json"
    When I call the API DELETE 
    Then I have the response in file "features/data/delete-person-res.json"

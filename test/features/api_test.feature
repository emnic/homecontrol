Feature: Test API
  As a API user
  I want to be able to do POST GET PUT and DELETE
  So that I can receivce, save or remove data on the server
  
  Background:
    Given the server is responsive

  @api_test
  Scenario Outline: Get from server
    Given there is a <unitType> saved
    When I send a request to get all <unitTypes>
    Then I get a comlete list of all <unitTypes>
    Examples:
    | unitType | unitTypes |
    |  device  |  devices  |
    |  timer   |  timers   |
    |  logfile |  logfile  |

  @api_test
  Scenario Outline: Add to server
    Given I have created a new <unitType> and wants to save it
    When I send a request to save the <unitType>
    Then it is saved in the list of <unitTypes>
    Examples:
    | unitType | unitTypes |
    |  device  |  devices  |
    |  timer   |  timers   |

  @api_test
  Scenario Outline: Update on server
    Given there is a <unitType> saved
    When I have made changes to the <unitType>
    Then it is updated and saved in the list of <unitTypes>
    Examples:
    | unitType | unitTypes |
    |  device  |  devices  |
    |  timer   |  timers   |

  @api_test @sut
  Scenario Outline: Delete on server
    Given there is a <unitType> saved
    When I send a request to remove a <unitType> from the list of <unitTypes>
    Then the <unitType> is removed from the list
    Examples:
    | unitType | unitTypes |
    |  device  |  devices  |
    |  timer   |  timers   |


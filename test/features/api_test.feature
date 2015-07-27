Feature: Test API
  As a API user
  I want to be able to do POST GET PUT and DELETE
  So that I can receivce, save or remove data on the server
  
  Background:
    Given the server is responsive
  
  @api_test
  Scenario: Get all devices
    Given theere is a device saved
    When I send a request to get all devices
    Then I get a comlete list of all devices
  
  @api_test
  Scenario: Add a timer
    Given I have created a new timer and wants to save it
    When I send a request to save the timer
    Then it is saved in the list of timers
  
  @api_test
  Scenario: Update a timer
    Given there is a timer saved
    When I have made changes to the timer
    Then it is updated and saved in the list of timers  
  
  @api_test
  Scenario: Get all timers
    Given there is a timer saved
    When I send a request to get all timers
    Then I get all timers 
  
  @api_test
  Scenario: Delete a timer
    Given there is a timer saved
    When I send a request to remove a timer from the list of timers
    Then the timer is removed from the list
  
  @api_test
  Scenario: Get logfile
    Given there exist a logfile on server
    When I send a request to get the log file
    Then I get the logfile

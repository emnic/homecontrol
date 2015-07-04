Feature: Test API
  As a API user
  I want to be able to do POST GET PUT and DELETE
  So that I can receivce, save or remove data on the server
  
  
  Scenario: Get all devices
    Given the server is responsive
    When I send a request to get all devices
    Then I get a comlete list of all devices
    
  @sut 
  Scenario: Add a timer
    Given the server is responsive
    When I have created a new timer and wants to save it
    Then it is saved in the list of timers
  
  Scenario: Update a timer
    Given the server is responsive
    When I have created a timer and wants to update it
    Then it is updated and saved in the list of timers  
   
   Scenario: Get all timers
    Given the server is responsive
    When I send a request to get all timers
    Then I get all timers 
    
  Scenario: Delete a timer
    Given the server is responsive
    When I send a request to remove a timer from the list of timers
    Then the timer is removed from the list
    
  Scenario: Get logfile
    Given the server is responsive
    When I send a request to get the log file
    Then I get the logfile

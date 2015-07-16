Feature: Handle logfile
  As an end user
  I want to handle logfiles
  So that I can see when the devices has been switched on and off
  
  Background:
    Given the homecontrol userinterface is displayed
 
  Scenario: Watch logfile
    Given I'm in the logfile section
    When I want to watch the logfile
    Then the logfile is displayed 
    
  Scenario: Filter logfile on dates
    Given there exist a logfile with entries in it
    When I choose to filter on a specific timespan
    Then only logfile entries between the specifed dates are displayed
    
  Scenario: Filter logfile on device name
    Given there exist a logfile with entries in it
    When I choose to filter on a specific device ID 
    Then only logfile entries for the specifed device is displayed
Feature: Handle devices
  As an end user
  I want to handle devices
  So that I can add, remove or update them
  
  Background:
    Given the homecontrol userinterface is displayed
    
  Scenario: Add a new device
    Given I'm in the device section
    When I want to create a new device
    Then the new device is added to the list of devices
  
  Scenario: Remove device
    Given there exist at least one device
    When I choose to delete a device
    Then the device is removed from the list of devices
    
  Scenario: Add timer to device
    Given there exists at least one device and one timer
    When I choose to add a timer to a device
    Then the timers is added to the device
    
  Scenario: Remove timer from device
    Given a timer is added to a device
    When I choose to remove the timer from the device
    Then the timers is removed from the device
    
  Scenario: Manually input device ID to device
  
  Scenario: Automatically associate device ID with device
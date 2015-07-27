Feature: Handle devices
  As an end user
  I want to handle devices
  So that I can add, remove or update them

  Background:
    Given the homecontrol user interface is displayed

  @gui_test
  Scenario: Edit mode
    Given I'm in the device section
    When I want to make a change or add a device
    Then I enter edit mode to make changes
    And close edit mode when the changes are done

  @gui_test
  Scenario: Add a new device
    Given I'm in the device section
    When I want to create a new device
    Then the new device is added to the list of devices

  @gui_test
  Scenario: Remove device
    Given there exist at least one device
    When I choose to remove a device
    Then the device is removed from the list of devices

  @gui_test @wip
  Scenario: Add timer to device
    Given there exists at least one device and one timer
    When I choose to add a timer to a device
    Then the timers is added to the device

  @gui_test @wip
  Scenario: Remove timer from device
    Given a timer is added to a device
    When I choose to remove the timer from the device
    Then the timers is removed from the device

  @gui_test
  Scenario: Cancel updates on timer
    Given there exist at least one device
    When I choose to make updates on the device and press "Cancel"
    Then the updates are "Not Saved" on the device

  @gui_test
  Scenario: Save updates on timer
    Given there exist at least one device
    When I choose to make updates on the device and press "Save"
    Then the updates are "Saved" on the device

  @gui_test @wip
  Scenario: Manually input device ID to device

  @gui_test @wip
  Scenario: Automatically associate device ID with device
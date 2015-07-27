Feature: Timers
  As an end user
  I want to handle timers and schedules
  So that I can schedule on and off schemas
  
  Background:
    Given the homecontrol user interface is displayed

  @gui_test
  Scenario: Add new timer
    Given I'm in the timer section
    When I want to create a new timer
    Then the new timer is added to the list of timers

  @gui_test @wip
  Scenario: Remove timer
    Given there exist at least one timer 
    When I choose to delete the timer
    Then the timer is removed from the list of timers

  @gui_test
  Scenario: Add schedule to timer
    Given there exist at least one timer
    When I choose to add a schedule to the timer
    Then the schedule is added to the choosen timer

  @gui_test @wip
  Scenario: Remove schedule on timer
    Given there exist one schedule one a timer
    When I choose to delete a schedule on the selected timer
    Then the schedule is removed

  @gui_test @wip
  Scenario: Set start and stop time for schedules

  @gui_test @wip
  Scenario: Add randomness to start and stop timer

  @gui_test @wip
  Scenario: Select active days of schedule
Feature: Test Scheduler
  As a user
  I want to be able to do define schedules to fire timer events
  So that the remote controlled devices can turn on and off
  
  Background:
    Given the scheduler is set in testmode
    
  @schedule_test @wip
  Scenario Outline: Get sunrise/sunset time
    Given location <long>, <lat>
    And date <date>
    When I send a request to get sundrise time <sunrise_time>
    And sunset time
    Then I get the sunrise time and sunset time
    Examples:
    |  long |  lat  |   date   | sunrise_time | sunset_time |
    | 56,24 | 12,88 | 16-01-01 |    08:42     |    15:42    |
    | 56,24 | 12,88 | 16-04-30 |    05:26     |    20:47    |
    | 56,24 | 12,88 | 16-09-15 |    06:41     |    19:28    |
    
  @schedule_test @wip
  Scenario: Calculate daily schedule
    Given a daily schedule exists
    When time passes the daily schedule time
    Then a new schedule is calculated that is different from the old schedule

  @schedule_test @wip
  Scenario Outline: Use simple schedule
    Given start time is set to <start_time>
    And stop time is set to <stop_time>
    When time passes start time 
    Then the device is swithed on
    When time passes stop time
    Then the device is swithed off
    | start_time |  stop_time |
    |  sunrise   |   08:42    |
    |    16:42   |   sunset   |
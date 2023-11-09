Feature: Specify Number of Events

  Scenario: When user hasn’t specified a number, 32 events are shown by default.
    Given the user has not selected a number of events
    When the user searches for an event
    Then the user should see 32 events.

  Scenario: User can change the number of events displayed.
    Given there has not been a search
    When the user selects the search parameters
    Then the user should be able to change the number of events to see.

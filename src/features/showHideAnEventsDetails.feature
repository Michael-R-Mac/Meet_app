Feature: Show/Hide Event Details

  Scenario: An event element is collapsed by default.
    Given user hasn’t selected an event
    When the user searches for an event
    Then the user should see the collapsed event.

  Scenario: User can expand an event to see details.
    Given the event is collapsed
    When user clicks on the event
    Then the user should see the event expand and see the details of the event.

  Scenario: User can collapse an event to hide details.
    Given the event is expanded
    When the user clicks to close
    Then Then the event collapses.

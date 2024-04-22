<h1 align="center">Welcome to Meet_App 👋</h1>

> This is a serverless, progressive web application (PWA) with React using a
> test-driven development (TDD) technique. The application uses the Google
> Calendar API to fetch upcoming events.
> The app used Atatus for continuous delivery.

<p>
Feature 1: Filter Events By City

User story
As a user,
I should be able to filter events by city
So that I can see a list of events taking place in that city.

Scenario 1

When user hasn’t searched for a specific city, show upcoming events from all cities.

• Given user hasn’t searched for any city;

• When the user opens the app;

• Then the user should see a list of upcoming events.

Scenario 2

User should see a list of suggestions when they search for a city.

• Given the main page is open;

• When user starts typing in the city textbox;

• Then the user should receive a list of cities (suggestions) that match what they’ve typed.

Scenario 3

User can select a city from the suggested list.

• Given user was typing “Berlin” in the city textbox AND the list of suggested cities is showing;

• When the user selects a city (e.g., “Berlin, Germany”) from the list;

• Then their city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city.

Feature 2: Show/Hide Event Details

User story
As a user,
I should be able to show or hide event details
So that I can see the details events or hide the details of events.

Scenario 1

An event element is collapsed by default.

• Given user hasn’t selected an event;

• When the user searches for an event;

• Then the user should see the collapsed event.

Scenario 2

User can expand an event to see details.

• Given the event is collapsed;

• When user clicks on the event;

• Then the user should see the event expand and see the details of the event.

Scenario 3

User can collapse an event to hide details.

• Given the event is expanded;

• When the user clicks to close;

• Then the event collapses.

Feature 3: Specify Number of Events

User story
As a user,
I should be able to specify the number of events
So that I can see the desired number of events.

Scenario 1

When user hasn’t specified a number, 32 events are shown by default.

• Given the user has not selected a number of events;

• When the user searches for an event;

• Then the user should see 32 events.

Scenario 2

User can change the number of events displayed.

• Given there has not been a search;

• When the user selects the search parameters;

• Then the user should be able to change the number of events to see.

Feature 4: Use the App When Offline

User story
As a user,
I should be able to use the app when offline
So that I can see the cached information.

Scenario 1

Show cached data when there’s no internet connection.

• Given the user has no internet connection;

• When the user explores the app;

• Then the user should see the cached data.

Scenario 2

Show error when user changes search settings (city, number of events).

• Given the user has no internet connection;

• When the user changes the search parameters;

• Then the user should see an error.

Feature 5: Add an App Shortcut to the Home Screen

User story

As a user,
I should be able to add an app shortcut to the home screen
So that I can see the meet app on the device home screen.

Scenario 1

User can install the meet app as a shortcut on their device home screen.

• Given the user is exploring is device home screen;

• When the user installs a shortcut;

• Then the user should see a shortcut to the meet app.

Feature 6: Display Charts Visualizing Event Details
User story

As a user,
I should be able to display charts visualizing event details
So that I can see a chart of events that are upcoming in that city.

Scenario 1

Show a chart with the number of upcoming events in each city.

• Given the user searches a city;

• When the user is exploring the events for that city;

• Then the user should see a chart with the number of upcoming events.

Serverless functions can be used to create a responsive and scalable web application. One way to use serverless functions in a web application is to use them to process data from user input forms.

To implement Feature 1: Filter Events By City, I can use AWS Lambda functions. The Lambda function can read the city name from the request and filter the events accordingly.

To implement Feature 2: Show/Hide Event Details, I can use JavaScript and CSS to toggle the visibility of event details when the user clicks on an event.

To implement Feature 3: Specify Number of Events, I can use AWS Lambda functions. The Lambda function can read the number of events requested from the request and return only that number of events.

</p>

### 🏠 [Homepage](https://Michael-R-Mac.github.io/Meet_app)

## Author

👤 **MichaelRMac**

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/Michael-R-Mac/Meet_app).

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_

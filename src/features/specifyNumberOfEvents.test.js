import { loadFeature, defineFeature } from "jest-cucumber";
import { render, within, waitFor } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  test("When user hasn’t specified a number, 32 events are shown by default.", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    given("the user has not selected a number of events", () => {
      AppComponent = render(<App />);
    });

    when("the user searches for an event", () => {
      // The user searches for an event but it has not specified a number of events or a city name.
      // Just explores the App.
    });

    then("the user should see 32 events.", async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector("#event-list");

      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        expect(EventListItems.length).toBe(32);
      });
    });
  });
  test("User can change the number of events displayed.", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    given("there has not been a search", () => {
      AppComponent = render(<App />);
    });

    when("the user selects the search parameters", async () => {
      const AppDOM = AppComponent.container.firstChild;

      const NumberOfEventsDOM = AppDOM.querySelector("#NumberOfEvents");
      const NumberOfEventsInput =
        within(NumberOfEventsDOM).queryByRole("textbox");

      await userEvent.type(NumberOfEventsInput, "{backspace}{backspace}10");
    });

    then(
      "the user should be able to change the number of events to see.",
      () => {
        const AppDOM = AppComponent.container.firstChild;
        const EventListDOM = AppDOM.querySelector("#event-list");
        const allRenderedEventItems =
          within(EventListDOM).queryAllByRole("listitem");
        expect(allRenderedEventItems.length).toEqual(10);
      }
    );
  });
});

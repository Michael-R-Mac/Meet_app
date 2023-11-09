import { loadFeature, defineFeature } from "jest-cucumber";
import { render, within, waitFor } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  test("An event element is collapsed by default.", ({ given, when, then }) => {
    let AppComponent;
    given("user hasn’t selected an event", () => {
      AppComponent = render(<App />);
    });

    when("the user searches for an event", async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector("#event-list");

      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        expect(EventListItems.length).toBe(32);
      });
    });

    then("the user should see the collapsed event.", async () => {
      const eventDOM = AppComponent.container.firstChild;
      const details = eventDOM.querySelector(".details");
      expect(details).not.toBeInTheDocument();
    });

    test("User can expand an event to see details.", ({
      given,
      when,
      then,
    }) => {
      let AppComponent;
      given("the event is collapsed", async () => {
        AppComponent = render(<App />);
        const AppDOM = AppComponent.container.firstChild;

        await waitFor(() => {
          const EventListItems = within(AppDOM).queryAllByRole("listitem");
          expect(EventListItems.length).toBe(32);
        });
        const details = AppDOM.querySelector(".details");
        expect(details).not.toBeInTheDocument();
      });

      when("user clicks on the event", async () => {
        const user = userEvent.setup();
        const button = AppComponent.queryAllByText("Show Details")[0];
        await user.click(button);
      });

      then(
        "the user should see the event expand and see the details of the event.",
        () => {
          const eventDOM = AppComponent.container.firstChild;
          const details = eventDOM.querySelector(".details");
          expect(details).toBeInTheDocument();
        }
      );
    });

    test("User can collapse an event to hide details.", ({
      given,
      when,
      then,
    }) => {
      let AppComponent;
      given("the event is expanded", async () => {
        AppComponent = render(<App />);
        const AppDOM = AppComponent.container.firstChild;

        await waitFor(() => {
          const EventListItems = within(AppDOM).queryAllByRole("listitem");
          expect(EventListItems.length).toBe(32);
        });
        const user = userEvent.setup();
        const button = AppComponent.queryAllByText("Show Details")[0];
        await user.click(button);
        const details = AppDOM.querySelector(".details");
        expect(details).toBeInTheDocument();
      });

      when("the user clicks to close", async () => {
        const user = userEvent.setup();
        const button = AppComponent.queryAllByText("Hide Details")[0];
        await user.click(button);
      });

      then("Then the event collapses.", () => {
        const eventDOM = AppComponent.container.firstChild;
        const details = eventDOM.querySelector(".details");
        expect(details).not.toBeInTheDocument();
      });
    });
  });
});

import { render, within, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NumberOfEvents from "../components/NumberOfEvents";
import App from "../App";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsComponent;

  beforeEach(() => {
    NumberOfEventsComponent = render(
      <NumberOfEvents setChangeNumberOfEvents={() => {}} />
    );
  });

  test('has an element with "NumberOfEvents" role', () => {
    const text = NumberOfEventsComponent.queryByRole("textbox");
    expect(text).toBeInTheDocument();
    expect(text).toHaveClass("EventNumber");
  });

  test("Default value input is 32", () => {
    const text = NumberOfEventsComponent.queryByRole("textbox");
    expect(text.value).toBe("32");
  });

  test("Value changes according to user input", async () => {
    const user = userEvent.setup();
    const input = NumberOfEventsComponent.queryByRole("textbox");
    await user.type(input, "{backspace}{backspace}10");
    expect(input).toHaveValue("10");
  });
});

describe("<NumberOfEvents /> component integration", () => {
  test("User can change the number of events displayed", async () => {
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;

    const NumberOfEventsDOM = AppDOM.querySelector("#NumberOfEvents");
    const NumberOfEventsInput =
      within(NumberOfEventsDOM).queryByRole("textbox");

    await userEvent.type(NumberOfEventsInput, "{backspace}{backspace}10");
    const EventListDOM = AppDOM.querySelector("#event-list");
    const allRenderedEventItems =
      within(EventListDOM).queryAllByRole("listitem");
    expect(allRenderedEventItems.length).toEqual(10);
  });
});

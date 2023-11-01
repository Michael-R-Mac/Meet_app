import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NumberOfEvents from "../components/NumberOfEvents";

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

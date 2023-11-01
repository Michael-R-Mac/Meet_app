import { render } from "@testing-library/react";
import Event from "../components/Event";
import userEvent from "@testing-library/user-event";
import { getEvents } from "../api";

describe("<Event /> Component", () => {
  let allEvents;

  beforeAll(async () => {
    allEvents = await getEvents();
  });

  let EventComponent;

  beforeEach(async () => {
    EventComponent = render(<Event event={allEvents[0]} />);
  });

  test("renders the event title", () => {
    expect(
      EventComponent.queryByText(allEvents[0].summary)
    ).toBeInTheDocument();
  });

  test("renders the event time", () => {
    expect(
      EventComponent.queryByText(allEvents[0].created)
    ).toBeInTheDocument();
  });

  test("renders the event location", () => {
    expect(
      EventComponent.queryByText(allEvents[0].location)
    ).toBeInTheDocument();
  });

  test('renders the button "Show Details"', () => {
    const button = EventComponent.queryByText("Show Details");
    expect(button).toBeInTheDocument();
  });

  test("event details are hidden by default", () => {
    const eventDOM = EventComponent.container.firstChild;
    const details = eventDOM.querySelector(".details");
    expect(details).not.toBeInTheDocument();
  });

  test('renders show details when button "show details" gains focus', async () => {
    const user = userEvent.setup();
    const eventDOM = EventComponent.container.firstChild;
    const button = EventComponent.queryByText("Show Details");
    await user.click(button);
    const details = eventDOM.querySelector(".details");
    expect(details).toBeInTheDocument();
  });

  test('after button "hide details" gains focus, hide details', async () => {
    const button = EventComponent.queryByText("Show Details");
    const eventDOM = EventComponent.container.firstChild;
    await userEvent.click(button);

    const hideButton = EventComponent.queryByText("Hide Details");
    await userEvent.click(hideButton);

    const details = eventDOM.querySelector(".details");
    expect(details).not.toBeInTheDocument();
  });
});

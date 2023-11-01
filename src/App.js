import "./App.css";
import CitySearch from "./components/CitySearch";
import EventList from "./components/EventList";
import NumberOfEvents from "./components/NumberOfEvents";
import { useEffect, useState } from "react";
import { extractLocations, getEvents } from "./api";

const App = () => {
  const [AllLocations, setAllLocations] = useState([]);
  const [ChangeNumberOfEvents, setChangeNumberOfEvents] = useState(32);
  const [Events, setEvents] = useState([]);
  const [CurrentCity, setCurrentCity] = useState("See all cities");

  const fetchData = async () => {
    const allEvents = await getEvents();
    const filteredEvents =
      CurrentCity === "See all cities"
        ? allEvents
        : allEvents.filter((event) => event.location === CurrentCity);
    setEvents(filteredEvents.slice(0, ChangeNumberOfEvents));
    setAllLocations(extractLocations(allEvents));
  };

  useEffect(() => {
    fetchData();
  }, [CurrentCity, ChangeNumberOfEvents]);

  return (
    <div className="App">
      <CitySearch allLocations={AllLocations} setCurrentCity={setCurrentCity} />
      <NumberOfEvents setChangeNumberOfEvents={setChangeNumberOfEvents} />
      <EventList Events={Events} />
    </div>
  );
};

export default App;

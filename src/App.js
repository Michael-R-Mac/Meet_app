import "./App.css";
import CitySearch from "./components/CitySearch";
import EventList from "./components/EventList";
import NumberOfEvents from "./components/NumberOfEvents";
import { useEffect, useState } from "react";
import { extractLocations, getEvents } from "./api";
import { InfoAlert, ErrorAlert } from "./components/Alert";

const App = () => {
  const [AllLocations, setAllLocations] = useState([]);
  const [ChangeNumberOfEvents, setChangeNumberOfEvents] = useState(32);
  const [events, setEvents] = useState([]);
  const [CurrentCity, setCurrentCity] = useState("See all cities");
  const [infoAlert, setInfoAlert] = useState("");
  const [errorAlert, setErrorAlert] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const allEvents = await getEvents();
      const filteredEvents =
        CurrentCity === "See all cities"
          ? allEvents
          : allEvents.filter((event) => event.location === CurrentCity);
      setEvents(filteredEvents.slice(0, ChangeNumberOfEvents));
      setAllLocations(extractLocations(allEvents));
    };

    fetchData();
  }, [CurrentCity, ChangeNumberOfEvents]);

  return (
    <div className="App">
      <div className="alerts-container">
        {errorAlert.length ? <ErrorAlert text={errorAlert} /> : null}
        {infoAlert.length ? <InfoAlert text={infoAlert} /> : null}
      </div>
      <CitySearch
        allLocations={AllLocations}
        setCurrentCity={setCurrentCity}
        setInfoAlert={setInfoAlert}
        setErrorAlert={setErrorAlert}
      />
      <NumberOfEvents
        setChangeNumberOfEvents={setChangeNumberOfEvents}
        setErrorAlert={setErrorAlert}
      />
      <EventList events={events} />
    </div>
  );
};

export default App;

import "./App.css";
import CitySearch from "./components/CitySearch";
import EventList from "./components/EventList";
import NumberOfEvents from "./components/NumberOfEvents";
import { useEffect, useState } from "react";
import { extractLocations, getEvents } from "./api";
import { InfoAlert, ErrorAlert, WarningAlert } from "./components/Alert";
import CityEventsChart from "./components/CityEventsChart";
import EventGenresChart from "./components/EventGenresChart";

const App = () => {
  const [allLocations, setAllLocations] = useState([]);
  const [changeNumberOfEvents, setChangeNumberOfEvents] = useState(32);
  const [events, setEvents] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [infoAlert, setInfoAlert] = useState("");
  const [errorAlert, setErrorAlert] = useState("");
  const [warningAlert, setWarningAlert] = useState("");

  useEffect(() => {
    if (navigator.onLine) {
      setWarningAlert("");
    } else {
      setWarningAlert("Offline App");
    }
    fetchData();
  }, [currentCity, changeNumberOfEvents]);
  const fetchData = async () => {
    const allEvents = await getEvents();
    const filteredEvents =
      currentCity === "See all cities"
        ? allEvents
        : allEvents.filter((event) => event.location === currentCity);
    setEvents(filteredEvents.slice(0, changeNumberOfEvents));
    setAllLocations(extractLocations(allEvents));
  };

  return (
    <div className="App">
      <div className="alerts-container">
        {errorAlert.length ? <ErrorAlert text={errorAlert} /> : null}
        {infoAlert.length ? <InfoAlert text={infoAlert} /> : null}
        {warningAlert.length ? <WarningAlert text={warningAlert} /> : null}
      </div>
      <CitySearch
        allLocations={allLocations}
        setCurrentCity={setCurrentCity}
        setInfoAlert={setInfoAlert}
        setErrorAlert={setErrorAlert}
      />
      <NumberOfEvents
        setChangeNumberOfEvents={setChangeNumberOfEvents}
        setErrorAlert={setErrorAlert}
      />
      <div className="charts-container">
        <CityEventsChart allLocations={allLocations} events={events} />
        <EventGenresChart events={events} />
      </div>
      <EventList events={events} />
    </div>
  );
};

export default App;

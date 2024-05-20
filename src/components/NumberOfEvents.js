const NumberOfEvents = ({ setChangeNumberOfEvents, setErrorAlert }) => {
  const handleChange = (event) => {
    const value = event.target.value;
    setChangeNumberOfEvents(value);
    let infoText;
    if (value <= 0) {
      infoText = "Only positive numbers are allowed";
      setChangeNumberOfEvents(0);
    } else {
      infoText = "";
      setChangeNumberOfEvents(value);
    }
    setErrorAlert(infoText);
  };

  return (
    <div id="NumberOfEvents">
      <input
        type="text"
        className="EventNumber"
        defaultValue="32"
        onChange={handleChange}
      />
    </div>
  );
};

export default NumberOfEvents;

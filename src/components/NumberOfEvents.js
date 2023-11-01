import React, { useState } from "react";

const NumberOfEvents = () => {
  const [ChangeNumberOfEvents, setChangeNumberOfEvents] = useState("");
  const handleChange = (event) => {
    const value = event.target.value;
    setChangeNumberOfEvents(value);
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

import { useState } from "react";

const Event = ({ event }) => {
  const [ShowDetails, setShowDetails] = useState(false);
  return (
    <li className="event">
      <div className="event-title">{event.summary}</div>
      <div>{event.created}</div>
      <div>{event.location}</div>
      {ShowDetails ? (
        <details open={true} className="details">
          {event.description}
        </details>
      ) : null}

      <div className="details-button">
        {ShowDetails ? (
          <button
            onClick={() => {
              setShowDetails(false);
            }}
          >
            Hide Details
          </button>
        ) : (
          <button
            onClick={() => {
              setShowDetails(true);
            }}
          >
            Show Details
          </button>
        )}
      </div>
    </li>
  );
};

export default Event;

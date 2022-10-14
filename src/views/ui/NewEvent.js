import { DatePicker } from '@mui/x-date-pickers';
import React, { useState } from 'react'

function NewEvent() {
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
   
    const [allEvents, setAllEvents] = useState(events);

    function handleAddEvent() {
        setAllEvents([...allEvents, newEvent]);
      }
  return (
    <>
    <h2>Add New Event</h2>
    <div>
      <input
        type="text"
        placeholder="Add Title"
        style={{ width: "50%", marginRight: "10px" }}
        value={newEvent.title}
        onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
      />
      <DatePicker
        placeholderText="Start Date"
        style={{ marginRight: "10px" }}
        selectsStart
        startDate={newEvent.start}
              endDate={newEvent.end}
        selected={newEvent.start}
        onChange={(start) => setNewEvent({ ...newEvent, start })}
      />
      <DatePicker
        placeholderText="End Date"
        selected={newEvent.end}
        selectsEnd
        startDate={newEvent.start}
              endDate={newEvent.end}
              minDate={newEvent.start}
        onChange={(end) => setNewEvent({ ...newEvent, end })}
      />
      <button stlye={{ marginTop: "10px" }} onClick={handleAddEvent}>
        Add Event
      </button>
    </div></>
  )
}

export default NewEvent
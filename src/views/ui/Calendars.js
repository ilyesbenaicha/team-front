import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Col, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { addCalander, getCalendar } from "../../slices/calanderSlice";

const locales = {
  "en-US": require("date-fns/locale/en-US")
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
});

const events = [
     {
     title: "Big Meeting",
     allDay: true,
     start: new Date(2022, 10, 0),
      end: new Date(2022, 10, 5)
   },
   {
     title: "Vacation",
    start: new Date(2021, 6, 7),
     end: new Date(2021, 6, 10)
   },
   {    title: "Conference",
  start: new Date(2021, 6, 20),
     end: new Date(2021, 6, 23)
   }
 ];

const Calendars = ()=> {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
 // const events = useSelector(state=>state.calendars.events)
  const [allEvents, setAllEvents] = useState(events);
  const dispatch = useDispatch();
  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent]);
    console.log("allEvents",allEvents);
    dispatch(addCalander(newEvent))
    console.log("new event",newEvent);
  }
  useEffect(() => {
    dispatch(getCalendar())
  }, [dispatch]);
  useEffect(() => {
    setAllEvents(allEvents)
  }, [allEvents]);
  const loginStatus = useSelector((state)=>state.auth.loginStatus)
  const token = localStorage.getItem("token");
     const user = token && jwtDecode(token);

  return (
    <Row>
  <Col xs lg="3">
      <h1>Calendar</h1>
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
      </div></Col>
     <Col md="auto"> <Calendar
        dispatch={dispatch}
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "500px", margin: "50px" }}
      /></Col>
  </Row>
  );
}

export default Calendars;

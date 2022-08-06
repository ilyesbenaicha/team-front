import React, { Component } from 'react';
import { Calendar,momentLocalizer } from 'react-big-calendar'
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './FullCalendar.css';
import events from './events';

const localizer = momentLocalizer(moment)

class FullCalendar extends Component {
  render() {
    const views = ['month', 'week', 'day'];
    const messages = {
      previous: 'back',
      next: 'next'
    };

    return (
      <div className="full-calendar-wrapper">
        <Calendar
         localizer={localizer}
          events={events}
          startAccessor="startDate"
          endAccessor="endDate"
          views={views}
          defaultView="month"
          messages={messages}
          selectable
          onSelectEvent={event => alert(event.title)}
          onSelectSlot={slotInfo =>
            alert(
              `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
                `\nend: ${slotInfo.end.toLocaleString()}` +
                `\naction: ${slotInfo.action}`
            )
          }
        />
      </div>
    );
  }
}

export default FullCalendar;
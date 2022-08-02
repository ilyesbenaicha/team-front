import React, { useState } from 'react'
import { getMonth } from '../../util'
import CalendarHeader from '../../components/Calendar/CalendarHeader'
import SidebarCalendar from '../../components/Calendar/SidebarCalendar'
import Month from '../../components/Calendar/Month'
export default function Calendar() {
    const [currentMonth, setCurrentMonth] = useState(getMonth())

  return (
    <React.Fragment>
        <div className='h-screen flex flex-columns'></div>
    <CalendarHeader/>
    <div className='flex flex-1'>
    <SidebarCalendar/>
    <Month month ={currentMonth}/>
    </div>
    </React.Fragment>
  )
}

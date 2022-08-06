import dayjs from 'dayjs'
import React from 'react'

export default function Day({day, rowIdx}) {
  function getCurrentDayClass() {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "blue-600 text-white rounded-full w-7"
      : "";
  }
  return (
    <div className="border border-gray-100 flex flex-row">
  <header className="flex flex-row items-center">
  {rowIdx === 0 &&(
    <p className="text-sm mt-1">{day.format('ddd').toUpperCase()}</p>

  )}
  <p
          className={`text-sm p-1 my-1 text-center  ${getCurrentDayClass()}`}
        >
    {day.format('DD')}
    </p></header>
    </div>
  )
}

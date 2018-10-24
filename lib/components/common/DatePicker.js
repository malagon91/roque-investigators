import React from 'react';
import DayPicker from 'react-day-picker';
import './../../../node_modules/react-day-picker/lib/style.css'
const  DatePicker = (props) => {
  return <DayPicker 
            selectedDays={props.selectedDay}
            onDayClick={props.onDayClick}/>;
}

export default DatePicker;
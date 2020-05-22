import React, {useState} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default function DateComponent() {
    
    const [selectedDate, setSelectedDate] = useState(null)
    return (
        <div>
            <DatePicker 
                selected={selectedDate}
                onChange={ date => setSelectedDate(date)}
                dateFormat="dd-MM-yyyy"
                minDate={new Date()}
                filterDate={date => date.getDay() !== 0 && date.getDay() !== 6}
                isClearable={true}
                scrollableYearDropdown={true}
            />
        </div>
    )
}

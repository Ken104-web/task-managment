import React from "react";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import './calender.css'

const Calendar = () => {
    return ( 
    <div className="calender-container">
        <div>
            <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
            headerToolbar={{
                left: 'prev,next today',
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay"
            }}
            allDaySlot={false}
            initialView="timeGridWeek"
            slotDuration={"01:00:00"}
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={true}
            nowIndicator={true}
            // initialEvents={currentEvents}
            // eventsSet={handleEvents}
            // select={handleDateSelect}
            // eventClick={handleEventClick}
            />
            </div>
        </div>

     );
}
 
export default Calendar;
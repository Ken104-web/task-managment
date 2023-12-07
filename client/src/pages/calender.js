import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import useCalendar from "../state/calendar";
import { createEventId } from "../component/data/data";
import './calender.css'

const Calendar = () => {
    const { currentEvents, setCurrentEvents } = useCalendar();

    const handleEvents = async (e) => {
        await Promise.resolve(setCurrentEvents(e))
    }
    const handleDateSelect = (selectInfo) => {
        let title = prompt('please enter title for the event')
        let calendarApi = selectInfo.view.calendar;

        calendarApi.unselect();

        if (title) {
            calendarApi.addEvent({
                id: createEventId(),
                title,
                start: selectInfo.start,
                end: selectInfo.end,
                allDay: selectInfo.allDay
            })
        }
    }
    const handleEventClick = (clickInfo) => {
        if (
            window.confirm("Are you really deleting this event?")
        ) {
            clickInfo.event.remove()
        }
    }
    return ( 
    <div className="X">
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
            initialEvents={currentEvents}
            eventsSet={handleEvents}
            select={handleDateSelect}
            eventClick={handleEventClick}
            />
            </div>
        </div>

     );
}
 
export default Calendar;
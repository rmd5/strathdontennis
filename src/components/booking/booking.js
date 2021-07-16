import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

require("datejs")

function Booking(props) {
    const [date, setDate] = useState(new Date())
    const [time, setTime] = useState("00:00:00.000")
    const [dateTime, setDateTime] = useState(new Date().toISOString())
    // const [duration, setDuration] = useState(1)

    useEffect(() => {
        let date_merge = Date.parse(date).toString("yyyy-MM-ddT")
        setDateTime(date_merge + time)
    }, [date, time])

    useEffect(() => {
        console.log(dateTime)
    }, [dateTime])

    return (
        <div className="booking">
            <div className="heading">
                Book a slot?
            </div>

            <div className="column">
                <Calendar
                    minDate={new Date()}
                    onChange={e => setDate(e)}
                    value={date}
                />
            </div>
            <div className="column">
                <div className="column_entry">
                    <div className="sub_heading">At what time?</div>

                    <select className="time_select" onChange={e => setTime(e.currentTarget.value + ":00:00.000")}>
                        <option value={"09"}>09</option>
                        <option value={10}>10</option>
                        <option value={11}>11</option>
                        <option value={12}>12</option>
                        <option value={13}>13</option>
                        <option value={14}>14</option>
                        <option value={15}>15</option>
                        <option value={16}>16</option>
                        <option value={17}>17</option>
                        <option value={18}>18</option>
                        <option value={19}>19</option>
                        <option value={20}>20</option>
                    </select>
                    <label>:00</label>
                </div>

                <div className="column_entry">
                    <div className="sub_heading">For how long?</div>

                    <select className="duration_select">
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                    </select>
                    <label> hour(s)</label>
                </div>
            </div>

            <br />

            <button className="booking_button">Book slot</button>
        </div>
    );
}

export default Booking;
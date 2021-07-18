import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import MODAL from '../modal/modal';
import MODAL_BUTTON from '../modal/modal_button';
import toggle_modal from "../modal/toggle_modal"
import create_booking from './create_booking';
import TimeRange from './time_range';

require("datejs")

function Booking(props) {
    const [name, setName] = useState("")
    const [date, setDate] = useState(new Date())
    const [time, setTime] = useState("09:00:00.000Z")
    const [dateTime, setDateTime] = useState(new Date().toISOString())
    const [duration, setDuration] = useState(1)
    const [bookings, setBookings] = useState([])
    const [minDate, setMinDate] = useState(new Date())

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL + "/get_all_bookings")
            .then(bookings => {
                let arr = []
                for (let i = 0, size = bookings.data?.data?.length; i < size; i++) {
                    arr.push(bookings.data?.data[i].date)
                    if (bookings.data?.data[i].duration === 2) {
                        arr.push(Date.parse(bookings.data?.data[i].date).addHours(1).toISOString())
                    }
                }
                setBookings(arr)
            })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        let date_merge = Date.parse(date).toString("yyyy-MM-ddT")
        setDateTime(date_merge + time)
        findNextFree(date_merge + time)
    }, [date, time, bookings])

    useEffect(() => {
        checkAvailable()
    }, [dateTime])

    function findNextFree(datetime) {
        if(bookings.includes(datetime)) {
            let t = Date.parse(datetime).addHours(0).toString("HH:00:00.000Z")
            if(t === "21:00:00.000Z") {
                setDate(Date.parse("+ 1day"))
                setMinDate(Date.parse("+ 1day"))
                setTime("09:00:00.000Z")
            } else {
                setTime(t)
            }
        }
    }

    async function book() {
        let res = await create_booking(name, dateTime, duration)
        if (res.data.success) {
            if (duration === 1) {
                setBookings([...bookings, dateTime])
            } else {
                setBookings([...bookings, dateTime, Date.parse(dateTime).addHours(1).toISOString()])
            }
            setTime("")
            toggle_modal("booking_confirm")
            toggle_modal("booking_success")
        }
    }

    function checkAvailable() {
        if(bookings.includes(Date.parse(dateTime).addHours(1).toISOString())) {
            setDuration(1)
        }
    }

    return (
        <div className="booking">
            <div className="heading">
                Book a slot?
            </div>

            <input className="name_input" type="text" placeholder="Your name" onChange={e => setName(e.currentTarget.value)}></input>
            <br />

            <div className="column">
                <Calendar
                    minDate={minDate}
                    onChange={e => setDate(e)}
                    value={date}
                />
            </div>
            <div className="column">
                <div className="column_entry">
                    <div className="sub_heading">At what time?</div>

                    <select value={time} className="time_select" onChange={e => setTime(e.currentTarget.value)}>
                        <option disabled={bookings.includes(Date.parse(date).toString("yyyy-MM-ddT") + "09:00:00.000Z")} value={"09:00:00.000Z"}>09:00</option>
                        <option disabled={bookings.includes(Date.parse(date).toString("yyyy-MM-ddT") + "10:00:00.000Z")} value={"10:00:00.000Z"}>10:00</option>
                        <option disabled={bookings.includes(Date.parse(date).toString("yyyy-MM-ddT") + "11:00:00.000Z")} value={"11:00:00.000Z"}>11:00</option>
                        <option disabled={bookings.includes(Date.parse(date).toString("yyyy-MM-ddT") + "12:00:00.000Z")} value={"12:00:00.000Z"}>12:00</option>
                        <option disabled={bookings.includes(Date.parse(date).toString("yyyy-MM-ddT") + "13:00:00.000Z")} value={"13:00:00.000Z"}>13:00</option>
                        <option disabled={bookings.includes(Date.parse(date).toString("yyyy-MM-ddT") + "14:00:00.000Z")} value={"14:00:00.000Z"}>14:00</option>
                        <option disabled={bookings.includes(Date.parse(date).toString("yyyy-MM-ddT") + "15:00:00.000Z")} value={"15:00:00.000Z"}>15:00</option>
                        <option disabled={bookings.includes(Date.parse(date).toString("yyyy-MM-ddT") + "16:00:00.000Z")} value={"16:00:00.000Z"}>16:00</option>
                        <option disabled={bookings.includes(Date.parse(date).toString("yyyy-MM-ddT") + "17:00:00.000Z")} value={"17:00:00.000Z"}>17:00</option>
                        <option disabled={bookings.includes(Date.parse(date).toString("yyyy-MM-ddT") + "18:00:00.000Z")} value={"18:00:00.000Z"}>18:00</option>
                        <option disabled={bookings.includes(Date.parse(date).toString("yyyy-MM-ddT") + "19:00:00.000Z")} value={"19:00:00.000Z"}>19:00</option>
                        <option disabled={bookings.includes(Date.parse(date).toString("yyyy-MM-ddT") + "20:00:00.000Z")} value={"20:00:00.000Z"}>20:00</option>
                    </select>
                </div>

                <div className="column_entry">
                    <div className="sub_heading">For how long?</div>

                    <select value={duration} className="duration_select" onChange={e => setDuration(e.currentTarget.value)}>
                        <option value={1}>1 hour</option>
                        <option value={2} disabled={bookings.includes(Date.parse(dateTime).addHours(1).toISOString())}>2 hours</option>
                    </select>
                </div>
            </div>

            <br />


            <MODAL_BUTTON id="booking_confirm">
                <button className="booking_button">Book slot</button>
            </MODAL_BUTTON>

            <MODAL id="booking_confirm">
                <div className="heading">
                    Please confirm
                </div>
                <div className="content">
                    <TimeRange th={Date.parse(date).toString("S")} day={Date.parse(date).toString("dd")} month={Date.parse(date).toString("MMMM")} first={time.split(":")[0] + ":00"} second={parseInt(time.split(":")[0]) + parseInt(duration) + ":00"} />
                </div>
                <div className="content bottom">
                    { }
                </div>
                <button className="primary" onClick={() => book()}>Book it!</button>
                <hr />
                <button className="secondary" onClick={() => toggle_modal("booking_confirm")}>Go back</button>
            </MODAL>

            <MODAL id="booking_success">
                <div className="heading">
                    You're booked in!
                </div>
                <div style={{ marginBottom: "20px" }} className="content">
                    <TimeRange th={Date.parse(date).toString("S")} day={Date.parse(date).toString("dd")} month={Date.parse(date).toString("MMMM")} first={time.split(":")[0] + ":00"} second={parseInt(time.split(":")[0]) + parseInt(duration) + ":00"} />
                </div>
                <button className="primary" onClick={() => toggle_modal("booking_success")}>Yay!</button>
            </MODAL>
        </div>
    );
}

export default Booking;
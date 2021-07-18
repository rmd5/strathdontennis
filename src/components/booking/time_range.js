import React from 'react';

function TimeRange(props) {
    return (
        <div className="date_range">
            <div className="date">
                <div className="month">
                    {props.month}
                </div>
                <div className="day">
                    {props.day}
                    <div className="th">
                        {props.th}
                    </div>
                </div>
            </div>
            <div className="time_range">
                <div className="first_time">
                    {props.first}
                </div>
                <div className="arrow_time"></div>
                <div className="second_time">
                    {props.second}
                </div>
            </div>
        </div>
    );
}

export default TimeRange;
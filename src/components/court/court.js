import React from 'react';

function Court(props) {
    return (
        <div className="tennis_court">
            <div className="outside_box">
                <div className="inside_box">
                    <div className="service">
                        <div className="service_box"></div>
                        <div className="service_box"></div>
                    </div>
                    <div className="center_line"></div>
                </div>
            </div>
        </div>
    );
}

export default Court;
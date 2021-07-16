import React from 'react';
import Booking from '../booking/booking';
// import Court from '../court/court';
import Footer from '../heading/footer';
import Heading from '../heading/heading';

function Landing(props) {

    return (
        <div>
            {/* <Court /> */}
            <Heading />
            <div style={{ textAlign: "center"}}>
                <Booking />
            </div>
            <Footer />
        </div>
    );
}

export default Landing;
import React from 'react';
import Footer from '../heading/footer';
import Heading from '../heading/heading';

function Location(props) {
    return (
        <div>
            <Heading />
            <div style={{ textAlign: "center", margin: "15px 0px" }}>
                <div style={{ width: "546px", height: "450px", backgroundColor: "#ffffff80", maxWidth: "calc(100% - 30px)", display: "inline-block" }}>
                    {/* <div style={{zIndex: "-1", position: "absolute", top: "50%", height: "50px", width: "50px", border: "1px solid black"}}></div> */}
                    <iframe width={"100%"} height="450" style={{ border: "0", zIndex: "2" }} loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?q=57%C2%B012'13.3%22N%203%C2%B004'14.7%22W&key=AIzaSyANl228X4VdoJ0WImN_k7AHs-Ovfki1M7w"></iframe>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Location;
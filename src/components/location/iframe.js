import React from 'react';
import Spinner from '../spinner/spinner';

function Iframe(props) {
    return (
        <div style={{width: "546px", height: "450px", maxWidth: "calc(100% - 30px)", margin: "15px", display: "inline-block", backgroundColor: "#ffffffCC", position: "relative"}}>
            <Spinner />
            <iframe width="100%" height="450" style={{ border: "0" }} loading="lazy" allowfullscreen src={`https://www.google.com/maps/embed/v1/place?q=57%C2%B012'13.4%22N%203%C2%B004'15.0%22W&key=${process.env.REACT_APP_GOOGLE_API_KEY}`}></iframe>
        </div>
    );
}

export default Iframe;
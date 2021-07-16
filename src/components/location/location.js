import React from 'react';
import Footer from '../heading/footer';
import Heading from '../heading/heading';
import Iframe from './iframe';

function Location(props) {
    return (
        <div>
            <Heading />
            <div style={{textAlign: "center"}}>
                <Iframe />
            </div>
            <Footer />            
        </div>
    );
}

export default Location;
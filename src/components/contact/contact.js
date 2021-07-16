import React from 'react';
import Footer from '../heading/footer';
import Heading from '../heading/heading';
import Section from './section';

function Contact(props) {
    return (
        <div>
            <Heading />
            <div style={{ textAlign: "center"}}>
                <Section />
            </div>
            <Footer />
        </div>
    );
}

export default Contact;
import React from 'react';

function Footer(props) {
    return (
        <div className="footer">
            Made by Rory Dobson - <span onClick={() => window.open("https://rorydobson.com", "_blank")}>https://rorydobson.com</span>
        </div>
    );
}

export default Footer;
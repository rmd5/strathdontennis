import React from 'react';

function Footer(props) {
    return (
        <div className="footer">
            Made by <span onClick={() => window.open("https://rorydobson.com", "_blank")}>rorydobson.com</span>
        </div>
    );
}

export default Footer;
import React from 'react';
import history from '../../history';
import MENU from "../menu/menu"

import ball from "../../img/ball.png"

import * as Icon from "react-bootstrap-icons"
import MENU_BUTTON from '../menu/menu_button';
import toggle_menu from '../menu/toggle_menu';

function Heading(props) {
    return (
        <div className="heading">
            <div className="logo" onClick={() => history.push("/")}>
                StrathdonTennis<img className="ball" src={ball} alt="dot"></img>net
            </div>


            <div className="burger">
                <MENU_BUTTON id="menu">
                    <Icon.List />
                </MENU_BUTTON>
            </div>


            <div className="links">
                <div className={window.location.pathname === "/" ? "link active" : "link"} onClick={() => history.push("/")}>
                    Book
                </div>
                <div className={window.location.pathname === "/contact" ? "link active" : "link"} onClick={() => history.push("/contact")}>
                    Contact
                </div>
                <div className={window.location.pathname === "/location" ? "link active" : "link"} onClick={() => history.push("/location")}>
                    Location
                </div>
                <div className="link" onClick={() => window.open("https://www.justgiving.com/crowdfunding/john-morris-4?utm_term=RBq5R9jk8", '_blank')}>
                    Donate <span style={{ fontSize: "18px" }}><Icon.BoxArrowUpRight /></span>
                </div>
            </div>

            <MENU id="menu">
                <div className={window.location.pathname === "/" ? "link active" : "link"} onClick={() => {
                    toggle_menu("menu")
                    setTimeout(() => {
                        history.push("/")
                    }, 100)
                }}>
                    Book
                </div>
                <div className={window.location.pathname === "/contact" ? "link active" : "link"} onClick={() => {
                    toggle_menu("menu")
                    setTimeout(() => {
                        history.push("/contact")
                    }, 100)
                }}>
                    Contact
                </div>
                <div className={window.location.pathname === "/location" ? "link active" : "link"} onClick={() => {
                    toggle_menu("menu")
                    setTimeout(() => {
                        history.push("/location")
                    }, 100)
                }}>
                    Location
                </div>
                <hr />
                <div className="link" onClick={() => window.open("https://www.justgiving.com/crowdfunding/john-morris-4?utm_term=RBq5R9jk8", '_blank')}>
                    Donate <span style={{ fontSize: "18px" }}><Icon.BoxArrowUpRight /></span>
                </div>
            </MENU>
        </div>
    );
}

export default Heading;
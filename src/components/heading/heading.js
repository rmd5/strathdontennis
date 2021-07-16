import React from 'react';
import history from '../../history';
import MODAL from "../modal/modal"

import ball from "../../img/ball.png"

import * as Icon from "react-bootstrap-icons"
import MODAL_BUTTON from '../modal/modal_button';
import toggle_modal from '../modal/toggle_modal';

function Heading(props) {
    return (
        <div className="heading">
            <div className="logo">
                StrathdonTennis<img className="ball" src={ball} alt="dot"></img>net
            </div>


            <div className="burger">
                <MODAL_BUTTON id="menu">
                    <Icon.List />
                </MODAL_BUTTON>
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

            <MODAL id="menu">
                <div className={window.location.pathname === "/" ? "link active" : "link"} onClick={() => {
                    toggle_modal("menu")
                    setTimeout(() => {
                        history.push("/")
                    }, 100)
                }}>
                    Book
                </div>
                <div className={window.location.pathname === "/contact" ? "link active" : "link"} onClick={() => {
                    toggle_modal("menu")
                    setTimeout(() => {
                        history.push("/contact")
                    }, 100)
                }}>
                    Contact
                </div>
                <div className={window.location.pathname === "/location" ? "link active" : "link"} onClick={() => {
                    toggle_modal("menu")
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
            </MODAL>
        </div>
    );
}

export default Heading;
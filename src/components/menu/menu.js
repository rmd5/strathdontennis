import React from "react";
import * as Icon from "react-bootstrap-icons";
import toggle_menu from "./toggle_menu";

class MENU extends React.Component {
    componentDidMount() {
        setTimeout(function () {
            if (this.props.auto) {
                let menuContent = document.getElementById(this.props.id + "_content");
                if (menuContent) {
                    menuContent.style.transform = "translate(0%, 0%)";
                }
            }
        }.bind(this), 100);
        this.forceUpdate();
    }

    closeMenu(id) {
        toggle_menu(id);
    }

    stopProp(e) {
        e.stopPropagation();
    }

    render() {
        return (
            <div className="menu" style={{ visibility: this.props.auto === true ? "visible" : "hidden" }} id={this.props.id} onClick={this.props.onMenuClose ? () => this.props.onMenuClose() : () => this.closeMenu(this.props.id)}>
                {/* <img className="print" src={print} /> */}
                <div id={this.props.id + "_content"} className="menuContent" onClick={(e) => this.stopProp(e)}>
                    <div className="menu_x" onClick={this.props.onMenuClose ? () => this.props.onMenuClose() : () => this.closeMenu(this.props.id)}>
                        <Icon.X />
                    </div>
                    <div className="spacing"></div>
                    <div className="menuCenter">
                        <div className="spacing-2"></div>
                        {this.props.children}
                        <div className="spacing-2"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MENU;

import React from "react";
import toggle_menu from "./toggle_menu";

class MENU_BUTTON extends React.Component {
    render() {
        return (
            <div className="menu_button" onClick={() => toggle_menu(this.props.id)}>
                {this.props.children}
            </div>
        );
    }
}

export default MENU_BUTTON;
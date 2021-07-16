import React from "react";
import toggle_modal from "./toggle_modal";

class MODAL_BUTTON extends React.Component {
    render() {
        return (
            <div className="modal_button" onClick={() => toggle_modal(this.props.id)}>
                {this.props.children}
            </div>
        );
    }
}

export default MODAL_BUTTON;
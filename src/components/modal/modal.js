import React from "react";
import * as Icon from "react-bootstrap-icons";
import toggle_modal from "./toggle_modal";

class MODAL extends React.Component {
    componentDidMount() {
        setTimeout(function () {
            if (this.props.auto) {
                let modalContent = document.getElementById(this.props.id + "_content");
                if (modalContent) {
                    modalContent.style.transform = "translate(0%, 0%)";
                }
            }
        }.bind(this), 100);
        this.forceUpdate();
    }

    closeModal(id) {
        toggle_modal(id);
    }

    stopProp(e) {
        e.stopPropagation();
    }

    render() {
        return (
            <div className="modal" style={{ visibility: this.props.auto === true ? "visible" : "hidden" }} id={this.props.id} onClick={this.props.onModalClose ? () => this.props.onModalClose() : () => this.closeModal(this.props.id)}>
                {/* <img className="print" src={print} /> */}
                <div id={this.props.id + "_content"} className="modalContent" onClick={(e) => this.stopProp(e)}>
                    <div className="modal_x" onClick={this.props.onModalClose ? () => this.props.onModalClose() : () => this.closeModal(this.props.id)}>
                        <Icon.X />
                    </div>
                    <div className="spacing"></div>
                    <div className="modalCenter">
                        <div className="spacing-2"></div>
                        {this.props.children}
                        <div className="spacing-2"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MODAL;

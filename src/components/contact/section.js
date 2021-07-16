import React from 'react';

function Section(props) {
    return (
        <div className="section">
            <div className="heading">
                Contact
            </div>
            <table>
                <tbody>
                    <tr className="contact">
                        <td>
                            <div className="contact_name">Lorna Eddie</div>
                            <div className="contact_reason">To book the court</div>
                        </td>
                        <td><div className="contact_number">01975 651259</div></td>
                    </tr>
                </tbody>
            </table>
            <hr />
            <table>
                <tbody>
                    <tr className="contact">
                        <td>
                            <div className="contact_name">Spar Shop</div>
                            <div className="contact_reason">To book the court</div>
                        </td>
                        <td><div className="contact_number">01975 651211</div></td>
                    </tr>
                </tbody>
            </table>
            <hr />
            <div className="sub_heading">
                Have a suggestion for the website?
            </div>
            <textarea placeholder="Write your message here" />
            <button className="button">Submit</button>
        </div>
    );
}

export default Section;
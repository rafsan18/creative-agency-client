import React from "react";

const FooterForm = () => {
    return (
        <form className="w-75">
            <div className="form-group">
                <input
                    style={{ borderRadius: "10px" }}
                    type="email"
                    className="form-control footer-input p-3"
                    placeholder="Your email address"
                />
            </div>
            <div className="form-group">
                <input
                    style={{ borderRadius: "10px" }}
                    type="text"
                    className="form-control footer-input p-3"
                    placeholder="Your Name/ Company's Name"
                />
            </div>

            <div className="form-group">
                <textarea
                    style={{ height: "250px", borderRadius: "10px" }}
                    className="form-control p-3"
                    rows="3"
                    placeholder="Your message"
                ></textarea>
            </div>
            <button type="submit" className="btn btn-dark px-5">
                Send
            </button>
        </form>
    );
};

export default FooterForm;

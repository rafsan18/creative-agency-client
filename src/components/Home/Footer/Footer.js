import React from "react";
import FooterForm from "../FooterForm/FooterForm";

const Footer = () => {
    return (
        <div
            style={{ height: "600px", backgroundColor: "#FBD062" }}
            className="d-flex flex-column justify-content-between"
        >
            <div className="row pt-5">
                <div className="col-md-4 offset-md-1">
                    <h3>
                        Let us handle your <br /> project professionally{" "}
                    </h3>
                    <p>
                        with well written codes, we build amazing apps for all
                        platforms, mobile and web apps in general
                    </p>
                </div>
                <div className="col-md-6 ">
                    <FooterForm></FooterForm>
                </div>
            </div>
            <p className="text-center ">
                <small>Copyright Orange Labs {new Date().getFullYear()}</small>
            </p>
        </div>
    );
};

export default Footer;

import React from "react";
import slack from "../../../images/logos/slack.png";
import google from "../../../images/logos/google.png";
import uber from "../../../images/logos/uber.png";
import netflix from "../../../images/logos/netflix.png";
import airbnb from "../../../images/logos/airbnb.png";
import "./BrandLogo.css";

const BrandLogo = () => {
    return (
        <div
            className="w-100 d-flex align-items-center justify-content-center  bg-light"
            style={{ height: "100px", padding: "100px 0" }}
        >
            <div className="row w-75 brand-img-container">
                <div className="col-md-1"></div>
                <div className="col-md-2">
                    <img src={slack} alt="Slack" />
                </div>
                <div className="col-md-2">
                    <img src={google} alt="Google" />
                </div>
                <div className="col-md-2">
                    <img src={uber} alt="Uber" />
                </div>
                <div className="col-md-2">
                    <img src={netflix} alt="Netflix" />
                </div>
                <div className="col-md-2">
                    <img src={airbnb} alt="Airbnb" />
                </div>
                <div className="col-md-1"></div>
            </div>
        </div>
    );
};

export default BrandLogo;

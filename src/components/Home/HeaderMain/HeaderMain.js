import React from "react";
import headerPic from "../../../images/logos/headerPic.png";

const HeaderMain = () => {
    return (
        <main className="row align-items-center" style={{ height: "600px" }}>
            <div className="col-md-4 offset-md-1">
                <h1>
                    Let's Grow Your <br /> Brand to The <br /> Next Level
                </h1>
                <p className="my-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
                    ducimus praesentium, odit sed maiores voluptatum.
                </p>
                <button className="btn btn-dark px-5">Hire us</button>
            </div>
            <div className="col-md-6">
                <img src={headerPic} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;

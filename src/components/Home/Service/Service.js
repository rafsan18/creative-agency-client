import React from "react";
import "./Service.css";

const Service = ({ service }) => {
    const { img, title, brief } = service;

    return (
        <div className="col-md-4  ">
            <div className="d-flex flex-column service-card">
                <img src={img} className="w-25 py-3   m-auto" alt="" />
                <h5 className="text-center">{title}</h5>
                <p className="text-center text-secondary">{brief}</p>
            </div>
        </div>
    );
};

export default Service;

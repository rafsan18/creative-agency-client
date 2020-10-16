import React from "react";
import AdminSidebar from "../AdminSidebar/AdminSidebar";

const ServiceList = () => {
    return (
        <div className="row    container-fluid">
            <div className="col-xl-2 col-md-3 col-sm-4 col-12">
                <AdminSidebar></AdminSidebar>
            </div>
            <div className="col-xl-10 col-md-9 col-sm-8 col-12">
                <h3 className="my-4 mx-5">List of Services</h3>
                <div
                    className="bg-light py-2 rounded "
                    style={{ height: "89vh" }}
                ></div>
            </div>
        </div>
    );
};

export default ServiceList;

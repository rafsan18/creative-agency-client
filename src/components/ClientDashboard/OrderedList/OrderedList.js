import React from "react";
import ClientSidebar from "../ClientSidebar/ClientSidebar";

const OrderedList = () => {
    return (
        <div className="row no-gutters p-0 container-fluid">
            <div className="col-xl-2 col-md-3 col-sm-4 col-12">
                <ClientSidebar />
            </div>
            <div className="col-xl-10 col-md-9 col-sm-8 col-12">
                <h3 className="my-4 mx-5">List of Services Ordered</h3>
                <div
                    className="bg-light py-2 rounded px-4 "
                    style={{ height: "89vh" }}
                ></div>
            </div>
        </div>
    );
};

export default OrderedList;

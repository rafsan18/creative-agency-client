import React from "react";
import ClientSidebar from "../ClientSidebar/ClientSidebar";

const OrderForm = () => {
    return (
        <div className="row ">
            <div className="col-xl-2 col-md-3 col-sm-4 col-12">
                <ClientSidebar></ClientSidebar>
            </div>
            <div className="col-xl-10 col-md-9 col-sm-8 col-12">
                <h1>
                    This section will contain <br /> order form of client
                </h1>
            </div>
        </div>
    );
};

export default OrderForm;

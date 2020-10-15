import React from "react";
import AdminSidebar from "../AdminSidebar/AdminSidebar";

const MakeAdmin = () => {
    return (
        <div className="row container-fluid">
            <div className="col-xl-2 col-md-3 col-sm-4 col-12">
                <AdminSidebar></AdminSidebar>
            </div>
            <div className="col-xl-10 col-md-9 col-sm-8 col-12">
                <h1>
                    This section will contain input <br /> email form to make
                    new admin
                </h1>
            </div>
        </div>
    );
};

export default MakeAdmin;

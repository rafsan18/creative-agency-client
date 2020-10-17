import React from "react";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import "./ServiceList.css";

const ServiceList = () => {
    return (
        <div className="row">
            <div className="col-xl-2 col-md-3 col-sm-4 col-12">
                <AdminSidebar></AdminSidebar>
            </div>
            <div className="col-xl-10 col-md-9 col-sm-8 col-12">
                <h3 className="my-4 mx-5">List of Services</h3>
                <div
                    className="bg-light py-2 rounded "
                    style={{ height: "89vh" }}
                >
                    <div className="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email ID</th>
                                    <th>Service</th>
                                    <th>Project Details</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <td>Becky Peckerman</td>
                                <td>peckerman@gmail.com</td>
                                <td>Web Development</td>
                                <td>
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Magni ut error repudiandae
                                    animi culpa porro!
                                </td>
                                <td>pending</td>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceList;

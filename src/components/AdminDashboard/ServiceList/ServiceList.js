import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import "./ServiceList.css";
import TableData from "./TableData";

const ServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orderList, setOrderList] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/fullOrderedList", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: loggedInUser.email }),
        })
            .then((res) => res.json())
            .then((data) => setOrderList(data));
    }, [loggedInUser.email]);

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
                                {orderList.map((order) => (
                                    <TableData
                                        key={order._id}
                                        order={order}
                                    ></TableData>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceList;

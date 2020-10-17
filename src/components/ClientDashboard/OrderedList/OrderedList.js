import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import ClientSidebar from "../ClientSidebar/ClientSidebar";
import SingleOrder from "../SingleOrder/SingleOrder";

const OrderedList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orderedServices, setOrderedServices] = useState([]);

    const { name, img, email } = loggedInUser;

    useEffect(() => {
        fetch(`http://localhost:5000/orderList?email=${email}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setOrderedServices(data);
            });
    }, [email]);

    return (
        <div className="row   ">
            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-12">
                <ClientSidebar />
            </div>
            <div className="col-xl-10 col-lg-10 col-md-9 col-sm-8 col-12">
                <div className="d-flex justify-content-between">
                    <h3 className="m-4">List of Services Ordered</h3>
                    <div className="d-flex">
                        <h6 className=" my-4 mx-4">{name}</h6>
                        <img
                            className="  my-4 mx-4"
                            style={{
                                width: "30px",
                                height: "30px",
                                borderRadius: "50%",
                            }}
                            src={img}
                            alt=""
                        />
                    </div>
                </div>
                <div
                    className="bg-light py-2 row   rounded px-4 "
                    style={{ height: "100%" }}
                >
                    {orderedServices.map((order) => (
                        <SingleOrder key={order._id} order={order} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OrderedList;

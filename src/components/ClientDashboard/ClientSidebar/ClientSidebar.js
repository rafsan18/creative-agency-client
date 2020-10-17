import { faCommentDots, faListAlt } from "@fortawesome/free-regular-svg-icons";
import { faShoppingCart, faUserLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { UserContext } from "../../../App";

import logo from "../../../images/logos/logo.png";
import "./ClientSidebar.css";

const ClientSidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    const location = useLocation();
    const { serviceId } = useParams();

    useEffect(() => {
        fetch("http://localhost:5000/isAdmin", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ email: loggedInUser.email }),
        })
            .then((res) => res.json())
            .then((data) => setIsAdmin(data));
    }, []);

    return (
        <div className="client-sidebar">
            <img src={logo} alt="Creative Agency" />
            <ul>
                <li>
                    <Link
                        className={` ${
                            location.pathname ===
                            `/clientDashboard/orderFormFor/${serviceId}`
                                ? "text-success"
                                : ""
                        } client-side-link`}
                        to={`/clientDashboard/orderFormFor/${serviceId}`}
                    >
                        <FontAwesomeIcon icon={faShoppingCart} />
                        &nbsp;&nbsp;Order
                    </Link>
                </li>
                <li>
                    <Link
                        className={` ${
                            location.pathname === "/clientDashboard/orderedList"
                                ? "text-success"
                                : ""
                        } client-side-link`}
                        to="/clientDashboard/orderedList"
                    >
                        <FontAwesomeIcon icon={faListAlt} />
                        &nbsp;&nbsp; Ordered List
                    </Link>
                </li>

                <li>
                    <Link
                        className={` ${
                            location.pathname === "/clientDashboard/reviewForm"
                                ? "text-success"
                                : ""
                        } client-side-link`}
                        to="/clientDashboard/reviewForm"
                    >
                        <FontAwesomeIcon icon={faCommentDots} />
                        &nbsp;&nbsp;Review
                    </Link>
                </li>
                {isAdmin ? (
                    <li>
                        <Link
                            className="client-side-link"
                            to="/adminDashboard/serviceList"
                        >
                            <FontAwesomeIcon icon={faUserLock} />
                            &nbsp;&nbsp; Admin
                        </Link>
                    </li>
                ) : null}
            </ul>
        </div>
    );
};

export default ClientSidebar;

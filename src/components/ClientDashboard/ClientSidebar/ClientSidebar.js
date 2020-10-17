import { faCommentDots, faListAlt } from "@fortawesome/free-regular-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";

import logo from "../../../images/logos/logo.png";
import "./ClientSidebar.css";

const ClientSidebar = () => {
    const location = useLocation();
    const { serviceId } = useParams();

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
                            location.pathname === "/adminDashboard/serviceList"
                                ? "text-success"
                                : ""
                        } client-side-link`}
                        to="/adminDashboard/serviceList"
                    >
                        <FontAwesomeIcon icon={faListAlt} />
                        &nbsp;&nbsp; Admin
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
            </ul>
        </div>
    );
};

export default ClientSidebar;

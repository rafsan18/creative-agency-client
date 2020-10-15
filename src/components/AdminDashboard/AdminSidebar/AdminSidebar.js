import { faListAlt } from "@fortawesome/free-regular-svg-icons";
import { faPlus, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../images/logos/logo.png";
import "./AdminSidebar.css";

const AdminSidebar = () => {
    const location = useLocation();
    return (
        <div className="admin-sidebar">
            <img src={logo} alt="Creative Agency" />
            <ul>
                <li>
                    <Link
                        className={` ${
                            location.pathname === "/adminDashboard/serviceList"
                                ? "text-success"
                                : ""
                        } admin-side-link`}
                        to="/adminDashboard/serviceList"
                    >
                        <FontAwesomeIcon icon={faListAlt} />
                        &nbsp;&nbsp; Service List
                    </Link>
                </li>
                <li>
                    <Link
                        className={` ${
                            location.pathname === "/adminDashboard/addService"
                                ? "text-success"
                                : ""
                        } admin-side-link`}
                        to="/adminDashboard/addService"
                    >
                        <FontAwesomeIcon icon={faPlus} />
                        &nbsp;&nbsp;Add Service
                    </Link>
                </li>
                <li>
                    <Link
                        className={` ${
                            location.pathname === "/adminDashboard/makeAdmin"
                                ? "text-success"
                                : ""
                        } admin-side-link`}
                        to="/adminDashboard/makeAdmin"
                    >
                        <FontAwesomeIcon icon={faUserPlus} />
                        &nbsp;&nbsp;Make Admin
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default AdminSidebar;

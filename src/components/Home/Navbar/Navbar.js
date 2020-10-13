import React from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../../../images/logos/logo.png";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    const history = useHistory();

    const moveToLoginPage = () => {
        history.push("/login");
    };

    const handleToggle = () => {
        setToggle(!toggle);
    };
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
            <Link className="navbar-brand" to="">
                <img src={logo} alt="Brand-logo" className="w-25" />
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                onClick={handleToggle}
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div
                className={`collapse navbar-collapse ${
                    toggle ? "d-block" : "d-none"
                }`}
            >
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item mr-5 ">
                        <Link className="nav-link" to="/home">
                            Home <span className="sr-only">(current)</span>
                        </Link>
                    </li>
                    <li className="nav-item mr-5">
                        <Link className="nav-link" to="">
                            Our Portfolio
                        </Link>
                    </li>
                    <li className="nav-item mr-5">
                        <Link className="nav-link" to="">
                            Our Team
                        </Link>
                    </li>
                    <li className="nav-item mr-5">
                        <Link className="nav-link" to="">
                            Contact Us
                        </Link>
                    </li>
                </ul>

                <button
                    className="btn btn-dark my-2 mr-5 px-5 my-sm-0"
                    type="submit"
                    onClick={moveToLoginPage}
                >
                    Login
                </button>
            </div>
        </nav>
    );
};

export default Navbar;

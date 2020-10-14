import React, { useContext } from "react";
import logo from "../../../images/logos/logo.png";
import googleLogo from "../../../images/logos/google.svg";
import { UserContext } from "../../../App";
import { useHistory, useLocation } from "react-router-dom";
import {
    authToken,
    handleGoogleSignIn,
    initializeLoginFramework,
} from "./loginManager";

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    initializeLoginFramework();

    const googleSignIn = () => {
        handleGoogleSignIn().then((res) => {
            setLoggedInUser(res);
            storeAuthToken();
        });
    };

    const storeAuthToken = () => {
        authToken()
            .then((res) => {
                sessionStorage.setItem("token", res);
                history.replace(from);
            })
            .catch((error) => {
                //do sth
            });
    };
    return (
        <div className=" container-fluid d-flex flex-column justify-content-center align-items-center ">
            <img
                src={logo}
                className="mt-5 pt-2"
                style={{ height: "80px", width: "200px" }}
                alt="logo"
            />
            <div
                className="d-flex flex-column justify-content-center align-items-center mt-5 login-container border"
                style={{ minHeight: "450px", width: "550px" }}
            >
                <h4 className="mb-5 pb-5">Login with</h4>
                <button
                    onClick={googleSignIn}
                    className="btn btn-light rounded-pill w-75 text-center"
                >
                    <img src={googleLogo} alt="Google Logo" className="mr-5 " />
                    Continue with google
                </button>

                <p>
                    Don't have an account? &nbsp;
                    <span className="text-primary toggle-field">
                        Create an account
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Login;

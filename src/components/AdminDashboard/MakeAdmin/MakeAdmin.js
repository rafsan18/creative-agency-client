import React, { useState } from "react";
import AdminSidebar from "../AdminSidebar/AdminSidebar";

const MakeAdmin = () => {
    const [admin, setAdmin] = useState({});
    const handleBlur = (e) => {
        const newAdmin = { ...admin };
        newAdmin[e.target.name] = e.target.value;
        setAdmin(newAdmin);
    };

    const handleSubmit = () => {
        fetch("https://warm-forest-22273.herokuapp.com/addAdmin", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(admin),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="row">
            <div className="col-xl-2 col-md-3 col-sm-4 col-12">
                <AdminSidebar></AdminSidebar>
            </div>
            <div className="col-xl-10 col-md-9 col-sm-8 col-12">
                <h3 className="my-4 mx-5">Make Admin</h3>
                <div
                    className="bg-light py-2 rounded "
                    style={{ height: "89vh" }}
                >
                    <form>
                        <div
                            className="row    p-4 mx-5 mt-5 bg-white "
                            style={{ borderRadius: "15px" }}
                        >
                            <div className="col-xl-7 col-md-6 col-sm-12 col-12 ">
                                <div className="form-group">
                                    <label className="font-weight-bold">
                                        Email
                                    </label>
                                    <input
                                        type="text"
                                        name="email"
                                        className="form-control "
                                        placeholder="Enter Email"
                                        onBlur={handleBlur}
                                    />
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-5 col-sm-12   ">
                                <label className="font-weight-bold">
                                    &nbsp;
                                </label>
                                <br />
                                <button
                                    className="btn btn-success submit-btn px-4 ml-1 "
                                    type="submit"
                                    onClick={handleSubmit}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;

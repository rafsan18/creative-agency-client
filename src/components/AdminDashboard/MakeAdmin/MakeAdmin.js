import React from "react";
import AdminSidebar from "../AdminSidebar/AdminSidebar";

const MakeAdmin = () => {
    return (
        <div className="row    ">
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

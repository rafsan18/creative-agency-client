import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import "./AddServices.css";

const AddServices = () => {
    const [service, setService] = useState({});

    const handleSubmit = () => {
        console.log("form submit");
    };
    const handleClick = () => {
        handleSubmit();
    };
    return (
        <div className="row no-gutters container-fluid p-0">
            <div className=" col-xl-2 col-md-3 col-sm-4 col-12">
                <AdminSidebar></AdminSidebar>
            </div>
            <div className="col-xl-10 col-md-9 col-sm-8 col-12">
                <h3 className="my-4 mx-5">Add Services</h3>
                <div
                    className="bg-light py-2 rounded "
                    style={{ height: "89vh" }}
                >
                    <form onSubmit={handleSubmit}>
                        <div
                            className="row no-gutters p-4 mx-5 mt-5 bg-white "
                            style={{ borderRadius: "15px" }}
                        >
                            <div className="col-xl-7 col-md-6 col-sm-12 col-12 ">
                                <div className="form-group">
                                    <label className="font-weight-bold">
                                        Service Title
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter title"
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="font-weight-bold">
                                        Description
                                    </label>
                                    <textarea
                                        className="form-control"
                                        placeholder="Enter Description"
                                        rows="5"
                                    ></textarea>
                                </div>
                            </div>

                            <div className="col-xl-4 col-md-5 col-sm-12 offset-md-1 ">
                                <div className="form-group">
                                    <p className="font-weight-bold mb-2">
                                        Icon
                                    </p>
                                    <label className="upload-btn">
                                        <input
                                            type="file"
                                            className="form-control-file"
                                        />
                                        <FontAwesomeIcon
                                            icon={faCloudUploadAlt}
                                            className="mr-2"
                                        />
                                        Upload Image
                                    </label>
                                </div>
                            </div>
                        </div>
                        <button
                            className="btn btn-success submit-btn offset-md-10 mt-3"
                            onClick={handleClick}
                            type="submit"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddServices;

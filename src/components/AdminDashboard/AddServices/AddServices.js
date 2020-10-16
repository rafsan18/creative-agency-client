import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import "./AddServices.css";

const AddServices = () => {
    const [serviceInfo, setServiceInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = (e) => {
        const newServiceInfo = { ...serviceInfo };
        newServiceInfo[e.target.name] = e.target.value;
        setServiceInfo(newServiceInfo);
    };

    const handleImgUpload = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    };

    const handleSubmit = (e) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("title", serviceInfo.title);
        formData.append("description", serviceInfo.description);

        fetch("http://localhost:5000/addAService", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });

        e.preventDefault();
    };

    return (
        <div className="row  container-fluid p-0">
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
                            className="row    p-4 mx-5 mt-5 bg-white "
                            style={{ borderRadius: "15px" }}
                        >
                            <div className="col-xl-7 col-md-6 col-sm-12 col-12 ">
                                <div className="form-group">
                                    <label className="font-weight-bold">
                                        Service Title
                                    </label>
                                    <input
                                        type="text"
                                        name="title"
                                        className="form-control "
                                        placeholder="Enter title"
                                        onBlur={handleBlur}
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="font-weight-bold">
                                        Description
                                    </label>
                                    <textarea
                                        name="description"
                                        className="form-control"
                                        placeholder="Enter Description"
                                        rows="5"
                                        onBlur={handleBlur}
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
                                            onChange={handleImgUpload}
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

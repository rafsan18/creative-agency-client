import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ClientSidebar from "../ClientSidebar/ClientSidebar";

const OrderForm = () => {
    const [selectedService, setSelectedService] = useState({});
    const { serviceId } = useParams();

    const { _id, title, description, image } = selectedService;

    useEffect(() => {
        fetch(`http://localhost:5000/service/${serviceId}`)
            .then((res) => res.json())
            .then((data) => {
                setSelectedService(data);
            });
    }, [serviceId]);

    return (
        <div className="row no-gutters p-0">
            <div className="col-xl-2 col-md-3 col-sm-4 col-12">
                <ClientSidebar></ClientSidebar>
            </div>

            <div className="col-xl-10 col-md-9 col-sm-8 col-12">
                <h3 className="my-4 mx-5">Order</h3>
                <div
                    className="bg-light py-2 rounded px-4 "
                    style={{ height: "89vh" }}
                >
                    <form className="mt-5 w-50 ">
                        <div className="form-group ">
                            <input
                                type="text"
                                className="form-control "
                                placeholder="Your name / Company's name"
                            />
                        </div>
                        <div className="form-group ">
                            <input
                                type="email"
                                className="form-control "
                                placeholder="Your email address"
                            />
                        </div>
                        <div className="form-group ">
                            <input
                                type="text"
                                className="form-control "
                                value={title}
                            />
                        </div>

                        <div className="form-group ">
                            <textarea
                                className="form-control "
                                rows="5"
                                placeholder="Project Details"
                            ></textarea>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group  ">
                                    <input
                                        type="text"
                                        className="form-control "
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group  ">
                                    <label className="upload-btn w-100 text-center">
                                        <input
                                            type="file"
                                            className="form-control-file "
                                            placeholder="Price"
                                        />
                                        <FontAwesomeIcon
                                            icon={faCloudUploadAlt}
                                            className="mr-2"
                                        />
                                        Upload Project File
                                    </label>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-dark px-5">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OrderForm;

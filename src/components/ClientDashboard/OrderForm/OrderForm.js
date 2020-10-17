import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { UserContext } from "../../../App";
import ClientSidebar from "../ClientSidebar/ClientSidebar";
import { useForm } from "react-hook-form";

const OrderForm = () => {
    const [selectedService, setSelectedService] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const { serviceId } = useParams();
    const history = useHistory();

    const { title, description, image } = selectedService;
    const { name, email, img } = loggedInUser;

    const { register, handleSubmit, watch, errors } = useForm();

    useEffect(() => {
        fetch(`https://warm-forest-22273.herokuapp.com/service/${serviceId}`)
            .then((res) => res.json())
            .then((data) => {
                setSelectedService(data);
            });
    }, [serviceId]);

    const onSubmit = (data) => {
        data.image = image;
        data.description = description;
        data.status = "Pending";

        fetch("https://warm-forest-22273.herokuapp.com/addOrder", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((success) => {
                //do sth
            });
    };

    return (
        <div className="row   ">
            <div className="col-xl-2 col-md-3 col-sm-4 col-12">
                <ClientSidebar />
            </div>

            <div className="col-xl-10 col-md-9 col-sm-8 col-12">
                <div className="d-flex justify-content-between">
                    <h3 className="m-4">Order</h3>
                    <div className="d-flex">
                        <h6 className=" my-4 mx-4">{name}</h6>
                        <img
                            className="  my-4 mx-4"
                            style={{
                                width: "30px",
                                height: "30px",
                                borderRadius: "50%",
                            }}
                            src={img}
                            alt=""
                        />
                    </div>
                </div>

                <div
                    className="bg-light py-2 rounded px-4 "
                    style={{ height: "89vh" }}
                >
                    <form
                        className="mt-5 w-50 "
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className="form-group ">
                            <input
                                type="text"
                                className="form-control "
                                placeholder="Your name / Company's name"
                                defaultValue={name}
                                name="name"
                                ref={register({ required: true })}
                            />
                            {errors.exampleRequired && (
                                <span>This field is required</span>
                            )}
                        </div>
                        <div className="form-group ">
                            <input
                                type="email"
                                className="form-control "
                                value={email}
                                name="email"
                                ref={register}
                            />
                        </div>
                        <div className="form-group ">
                            <input
                                type="text"
                                className="form-control "
                                value={title}
                                name="title"
                                ref={register}
                            />
                        </div>

                        <div className="form-group ">
                            <textarea
                                className="form-control "
                                rows="5"
                                placeholder="Project Details"
                                name="clientBrief"
                                ref={register({ required: true })}
                            ></textarea>
                            {errors.exampleRequired && (
                                <span>This field is required</span>
                            )}
                        </div>
                        <div className="form-group  ">
                            <input
                                type="text"
                                className="form-control "
                                placeholder="price"
                                name="price"
                                ref={register}
                            />
                        </div>

                        {/* <div className="row">
                            <div className="col-md-6"></div> */}
                        {/* <div className="col-md-6">
                                <div className="form-group  ">
                                    <label className="upload-btn w-100 text-center">
                                        <input
                                            type="file"
                                            className="form-control-file "
                                        />
                                        <FontAwesomeIcon
                                            icon={faCloudUploadAlt}
                                            className="mr-2"
                                        />
                                        Upload Project File
                                    </label>
                                </div>
                            </div> */}

                        <br />
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

import React, { useContext, useState } from "react";
import ClientSidebar from "../ClientSidebar/ClientSidebar";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../App";

const ReviewForm = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [clientReview, setClientReview] = useState([]);

    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = (data) => {
        data.img = loggedInUser.img;

        fetch("http://localhost:5000/addReview", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((success) => {
                //do sth
            });
    };

    return (
        <div className="row">
            <div className="col-xl-2 col-md-3 col-sm-4 col-12">
                <ClientSidebar />
            </div>
            <div className="col-xl-10 col-md-9 col-sm-8 col-12 ">
                <h3 className="my-4 mx-5">Review</h3>
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
                                className="form-control  "
                                placeholder="Your Name"
                                name="name"
                                ref={register({ required: true })}
                            />
                        </div>

                        <div className="form-group ">
                            <input
                                type="text"
                                className="form-control"
                                placeholder=" Designation, Company's Name"
                                name="designation"
                                ref={register({ required: true })}
                            />
                        </div>

                        <div className="form-group ">
                            <textarea
                                className="form-control "
                                rows="5"
                                placeholder="Project Details"
                                name="comment"
                                ref={register({ required: true })}
                            ></textarea>
                        </div>

                        <button type="submit" class="btn btn-dark px-5">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ReviewForm;

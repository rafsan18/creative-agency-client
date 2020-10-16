import React from "react";
import ClientSidebar from "../ClientSidebar/ClientSidebar";

const ReviewForm = () => {
    return (
        <div className="row no-gutters container-fluid p-0">
            <div className="col-xl-2 col-md-3 col-sm-4 col-12">
                <ClientSidebar />
            </div>
            <div className="col-xl-10 col-md-9 col-sm-8 col-12 ">
                <h3 className="my-4 mx-5">Order</h3>
                <div
                    className="bg-light py-2 rounded px-4 "
                    style={{ height: "89vh" }}
                >
                    <form className="mt-5 w-50 ">
                        <div className="form-group ">
                            <input
                                type="text"
                                className="form-control  "
                                placeholder="Your Name"
                                name="name"
                            />
                        </div>

                        <div className="form-group ">
                            <input
                                type="text"
                                className="form-control"
                                placeholder=" Designation, Company's Name"
                                name="Designation"
                            />
                        </div>

                        <div className="form-group ">
                            <textarea
                                className="form-control "
                                rows="5"
                                placeholder="Project Details"
                                name="review"
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

import React from "react";

const Testimonial = ({ review }) => {
    const { name, designation, comment, img } = review;

    return (
        <div className="col-md-4 ">
            <div className="border px-3">
                <div className="row p-4">
                    <img
                        className="img-fluid  "
                        style={{ height: "70px" }}
                        src={img}
                        alt=""
                    />
                    <div className="ml-4 mt-2">
                        <h5>{name}</h5>
                        <h6>{designation}</h6>
                    </div>
                </div>
                <p>{comment}</p>
            </div>
        </div>
    );
};

export default Testimonial;

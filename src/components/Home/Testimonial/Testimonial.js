import React from "react";

const Testimonial = ({ clientInfo }) => {
    console.log(clientInfo);
    const { name, designation, comment, img } = clientInfo;
    return (
        <div className="col-md-3  border  ">
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
    );
};

export default Testimonial;

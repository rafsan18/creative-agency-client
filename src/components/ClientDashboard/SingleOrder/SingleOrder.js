import React from "react";
import "./SingleOrder.css";

const SingleOrder = ({ order }) => {
    const { image, status, title, description } = order;
    return (
        <div className="col-xl-4 col-md-4  col-sm-12  col-12 my-3">
            <div className="bg-white border p-4">
                {order.image ? (
                    <img
                        src={`data:image/png;base64,${image.img}`}
                        className="w-25 py-3   m-auto"
                        alt=""
                    />
                ) : (
                    <img src={image} className="w-25 py-3   m-auto" alt="" />
                )}
                <p className="status-style">{status}</p>

                <h5>{title}</h5>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default SingleOrder;

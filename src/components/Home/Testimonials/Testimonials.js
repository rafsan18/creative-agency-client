import React from "react";
import nash from "../../../images/nash.png";
import miriam from "../../../images/miriam.png";
import bria from "../../../images/bria.png";
import Testimonial from "../Testimonial/Testimonial";

const clientsInfo = [
    {
        id: 101,
        name: "Nash Patrik",
        designation: "CEO, Manpol",
        comment:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nemo nostrum aliquid quasi animi vel.",
        img: nash,
    },
    {
        id: 102,
        name: "Miriam Barron",
        designation: "CEO, Manpol",
        comment:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nemo nostrum aliquid quasi animi vel.",
        img: miriam,
    },
    {
        id: 103,
        name: "Bria Malone",
        designation: "CEO, Manpol",
        comment:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nemo nostrum aliquid quasi animi vel.",
        img: bria,
    },
];

const Testimonials = () => {
    return (
        <div>
            <h3 className="text-center my-5 py-5">
                Clients <span className="text-brand">Feedback</span>{" "}
            </h3>
            <div className="row w-75 justify-content-around m-auto pb-5">
                {clientsInfo.map((clientInfo) => (
                    <Testimonial
                        key={clientInfo.id}
                        clientInfo={clientInfo}
                    ></Testimonial>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;

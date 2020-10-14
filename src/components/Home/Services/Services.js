import React from "react";
import design from "../../../images/icons/design.png";
import graphic from "../../../images/icons/graphic.png";
import web from "../../../images/icons/web.png";
import Service from "../Service/Service";

const offeredServices = [
    {
        id: 301,
        img: design,
        title: "Web & Mobile design",
        brief:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi eaque molestiae, labore veniam aut odit.",
    },
    {
        id: 302,
        img: graphic,
        title: "Graphic design",
        brief:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi eaque molestiae, labore veniam aut odit.",
    },
    {
        id: 303,
        img: web,
        title: "Web development",
        brief:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi eaque molestiae, labore veniam aut odit.",
    },
];

const Services = () => {
    return (
        <div className="bg-light" style={{ paddingBottom: "100px" }}>
            <h3 className="text-center  py-5">
                Provide awesome <span className="text-brand">services</span>
            </h3>
            <div className="row w-75 m-auto">
                {offeredServices.map((service) => (
                    <Service key={service.id} service={service}></Service>
                ))}
            </div>
        </div>
    );
};

export default Services;

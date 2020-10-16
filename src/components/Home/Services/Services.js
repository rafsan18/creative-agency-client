import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
    const [offeredServices, setOfferedServices] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then((res) => res.json())
            .then((data) => setOfferedServices(data));
    }, []);

    return (
        <div className="bg-light" style={{ paddingBottom: "100px" }}>
            <h3 className="text-center  py-5">
                Provide awesome <span className="text-brand">services</span>
            </h3>
            <div className="row w-75 m-auto">
                {offeredServices.map((service) => (
                    <Service key={service._id} service={service}></Service>
                ))}
            </div>
        </div>
    );
};

export default Services;

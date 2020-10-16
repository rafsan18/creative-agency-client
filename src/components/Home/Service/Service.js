import React from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import "./Service.css";

const calc = (x, y) => [
    -(y - window.innerHeight / 2) / 20,
    (x - window.innerWidth / 2) / 20,
    1.1,
];
const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Service = ({ service }) => {
    const { image, title, description, _id } = service;
    const [props, set] = useSpring(() => ({
        xys: [0, 0, 1],
        config: {
            mass: 5,
            tension: 350,
            friction: 40,
        },
    }));

    return (
        <div className="col-md-4  ">
            <Link
                className="service-card-link"
                to={`/clientDashboard/orderFormFor/${_id}`}
            >
                <animated.div
                    className="service-card"
                    onMouseMove={({ clientX: x, clientY: y }) =>
                        set({ xys: calc(x, y) })
                    }
                    onMouseLeave={() => set({ xys: [0, 0, 1] })}
                    style={{
                        transform: props.xys.interpolate(trans),
                    }}
                >
                    <div className="d-flex flex-column px-3 ">
                        {service.image ? (
                            <img
                                src={`data:image/png;base64,${image.img}`}
                                className="w-25 py-3   m-auto"
                                alt=""
                            />
                        ) : (
                            <img
                                src={image}
                                className="w-25 py-3   m-auto"
                                alt=""
                            />
                        )}

                        <h5 className="text-center">{title}</h5>
                        <p className="text-center text-secondary">
                            {description}
                        </p>
                    </div>
                </animated.div>
            </Link>
        </div>
    );
};

export default Service;

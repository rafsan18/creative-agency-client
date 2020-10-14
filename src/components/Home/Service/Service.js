import React from "react";
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
    const { img, title, brief } = service;
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
                <div className="d-flex flex-column ">
                    <img src={img} className="w-25 py-3   m-auto" alt="" />
                    <h5 className="text-center">{title}</h5>
                    <p className="text-center text-secondary">{brief}</p>
                </div>
            </animated.div>
        </div>
    );
};

export default Service;

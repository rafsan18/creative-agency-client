import React, { useEffect, useState } from "react";
import Testimonial from "../Testimonial/Testimonial";

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("https://warm-forest-22273.herokuapp.com/reviews")
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);

    return (
        <div>
            <h3 className="text-center my-5 py-5">
                Clients <span className="text-brand">Feedback</span>{" "}
            </h3>
            <div className="row w-75  m-auto ">
                {reviews.map((review) => (
                    <Testimonial key={review._id} review={review}></Testimonial>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;

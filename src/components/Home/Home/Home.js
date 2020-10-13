import React from "react";
import BrandLogo from "../BrandLogo/BrandLogo";
import CompletedWorks from "../CompletedWorks/CompletedWorks";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div style={{ overflow: "hidden" }}>
            <Header></Header>
            <BrandLogo></BrandLogo>
            <Services></Services>
            <CompletedWorks></CompletedWorks>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;

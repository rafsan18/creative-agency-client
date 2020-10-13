import React from "react";
import BrandLogo from "../BrandLogo/BrandLogo";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Services from "../Services/Services";

const Home = () => {
    return (
        <div style={{ overflow: "hidden" }}>
            <Header></Header>
            <BrandLogo></BrandLogo>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;

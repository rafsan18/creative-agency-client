import React from "react";
import BrandLogo from "../BrandLogo/BrandLogo";
import Header from "../Header/Header";

const Home = () => {
    return (
        <div style={{ overflow: "hidden" }}>
            <Header></Header>
            <BrandLogo></BrandLogo>
        </div>
    );
};

export default Home;

import {Fragment} from "react";

import HeroSection from "../Components/HeroSection/HeroSection";
import Header from "../Components/Navbar/Header";
import Header2 from "../Components/Navbar/Header2";
import Products from "../Components/Product/Products";

const HomePage = () => {
    return (
        <Fragment>
            <Header/>
            <Header2/>
            <div style = {{
                    "display":"flex",
                    "flexDirection":"column",
                    "alignItems": "center"
                }}
            >
                <HeroSection/>
                <Products/>
            </div>
        </Fragment>
    );
}

export default HomePage;
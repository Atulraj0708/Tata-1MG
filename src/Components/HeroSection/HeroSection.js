import React from "react";
import classes from "./HeroSection.module.css";

const HeroSection = () => {
    return (
        <div className={classes.heroContainer}>
            <div className={classes.imageWrapper}>
                <img src="https://onemg.gumlet.io/diagnostics%2F2024-01%2F1706088937_1948x800+%2827%29.png" alt="Hero Banner" className={classes.heroImage} />
            </div>
        </div>
    );
}

export default HeroSection;

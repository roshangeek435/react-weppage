import React from "react";
import Common from "./Common";

const About = () => {
    return (
        <>
            <Common
                title="About us"
                paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, natus. Est, deserunt incidunt fugiat ducimus autem nam in et possimus!"
                imgSrc="https://source.unsplash.com/random/900×700/?about"
                buttonText="Our Services"
                buttonLink="/services"
            />
        </>
    );
};

export default About;

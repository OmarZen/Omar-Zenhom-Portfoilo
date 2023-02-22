import React from "react";
import ProgrammingCV from "../../assets/CV_Software_Omar_Waleed.pdf";
import DesigningCV from "../../assets/CV_Design_Omar_Waleed.pdf";

const CTA = () => {
    return (
        <div className="cta">
            <a href={ProgrammingCV} download className='btn'>Download CV Programing</a>
            <a href={DesigningCV} download className='btn'>Download CV Designing</a>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
    );
}

export default CTA;

import React from "react";
import './about.css'
import ME from '../../assets/photo_2023-02-18_12-16-25.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
    return (
    <section id="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className="container about__container">
            <div className="about__me">
                <div className="about__me-image">
                    <img src={ME} alt="About Image"/>
                </div>
            </div>

            <div className="about__content">
                <div className="about__cards">
                    <article className="about__card">
                        <FaAward className="about__icon"/>
                        <h5>Experience In Programming</h5>
                        <small>3+ Years Working</small>
                    </article>
                    <article className="about__card">
                        <FaAward className="about__icon"/>
                        <h5>Experience In Designing</h5>
                        <small>7+ Years Working</small>
                    </article>
                    <article className="about__card">
                        <FiUsers className="about__icon"/>
                        <h5>Clients</h5>
                        <small>50+ Client</small>
                    </article>
                    <article className="about__card">
                        <VscFolderLibrary className="about__icon"/>
                        <h5>Projects</h5>
                        <small>80+ Completed</small>
                    </article>
                </div>

                <p>
                Hello... I am Omar, a software engineering & graphic designer :<br/>
                Junior Full-Stack Developer and Web Developer specialized in front-end development - 
                Experienced with all stages of the development cycle for dynamic web projects - 
                Well-versed in more than 7 programming languages - Background in project management and
                customer relations. Web design and mobile applications.<br/>
                I am constantly looking for projects that highlight my skill, specialization, 
                and experience in design, as well as helping clients reach their goals and projects 
                required for design, whether logos, visual identity, innovative creative ads, social 
                media designs, infographic design, video production, modification, and sound editing.
                </p>

                <a href="#contact" className="button button-primary">Let's Talk</a>
            </div>
        </div>
    </section>
    )
}

export default About;
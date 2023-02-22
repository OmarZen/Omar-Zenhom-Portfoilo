import React from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi';

const Services = () => {
    return (
        <section id='services'>
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className='container services__container'>
                <article className="service">
                    <div className="service__head">
                        <h3>Motion Graphics</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Animation: create animations for a variety of purposes, such as commercials, explainer videos, product demos, and more.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Visual Effects: create visual effects for movies and television shows.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Interactive Media: create interactive media such as websites, apps, and games.</p>
                        </li>
                    </ul>
                </article>
                {/* END OF Motion Graphics */}
                <article className="service">
                    <div className="service__head">
                        <h3>UI/UX Design</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>User research and analysis</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Information architecture</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Interaction design</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Visual design</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Prototyping and Usability testing</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Content strategy and copywriting</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Accessibility compliance</p>
                        </li>
                    </ul>
                </article>
                {/* END OF UI/UX */}
                <article className="service">
                    <div className="service__head">
                        <h3>Android Development</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Android Application Development: Developing custom Android applications (Responsive - Easy to use) for mobile devices, tablets, and other Android-powered devices.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Android UI/UX Design: Designing user interfaces and user experiences for Android applications.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Cloud Integration: Integrating cloud-based services with an Android application</p>
                        </li>
                    </ul>
                </article>
                {/* END OF Android Development */}
                <article className="service">
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Website Design and Development: Creating custom websites from scratch, using HTML, CSS, JavaScript, and other programming languages.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Responsive Design: Making sure websites look great on all devices by using responsive design techniques.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Search Engine Optimization (SEO): Optimizing websites for better search engine rankings and visibility.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Database Development: Creating databases to store website data and information securely.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Web Hosting: Setting up web hosting accounts and managing them on a regular basis.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Maintenance & Support: Providing ongoing maintenance and technical support for websites after launch.</p>
                        </li>
                    </ul>
                </article>
                {/* END OF WEB DEV */}
                <article className="service">
                    <div className="service__head">
                        <h3>Content Creation</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Content Strategy: Developing a content strategy that aligns with the overall marketing goals and objectives.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Content Creation: Writing, editing, and producing content for blogs, websites, social media, newsletters, press releases, and other marketing materials.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Content Optimization: Optimizing content for SEO purposes to ensure maximum visibility and engagement with target audiences.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Content Distribution</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Content Measurement: Measuring the success of content campaigns through analytics and reporting tools such as Google Analytics or Adobe Analytics.</p>
                        </li>
                    </ul>
                </article>
                {/* END OF CONTENT CREATION */}
                <article className="service">
                    <div className="service__head">
                        <h3>Graphic Designing</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>posters for social media, banners, and GIFs of all sizes and for all social networking sites and electronic stores.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Logo Design</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Brand Identity Design</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Print Design (Business Cards, Brochures, Posters, etc.)</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Web Design (Websites, Landing Pages, etc.)</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Packaging Design</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Illustration</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Infographics</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Photo Retouching, editing, removing watermarks, and changing colors in images.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Designing publications,  profiles, roll-ups, flyers, infographics, etc.</p>
                        </li>
                    </ul>
                </article>
                {/* END OF Graphic Designing */}
            </div>
        </section>
    )
}

export default Services;
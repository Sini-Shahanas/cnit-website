import Link from 'next/link';
import React from 'react';

const AboutFive = () => {
    return (
        <>
            <section className="about-section-five pt-0">
                <div className="auto-container">
                    <div className="row">
                        <div className="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-2 wow fadeInRight" data-wow-delay="600ms">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <span className="sub-title">About Our Company</span>
                                    <h2>Professional IT Experts for Tech Solutions</h2>
                                    <div className="text">Web designing in a powerful way of just not an only professions, however, in a passion for our Company. We have to a
                                        tendency to believe the idea that smart looking of any website is the first impression on visitors.</div>
                                </div>
                                <ul className="list-style-three">
                                    <li>The business applications</li>
                                    <li>The business applications</li>
                                    <li>Revolutionary catalysts chang</li>
                                    <li>Revolutionary catalysts chang</li>
                                    <li>Catalysts for chang seamlessly</li>
                                    <li>Catalysts for chang seamlessly</li>
                                </ul>
                                <div className="btn-box d-flex">
                                    <Link href="/page-about" className="theme-btn btn-style-one"><span className="btn-title">Discover more</span></Link>
                                    <div className="founder-info">
                                        <div className="thumb"><img src="/images/resource/thumb-1.jpg" title='Oitech' /></div>
                                        <h5 className="name">Kevin Martin</h5>
                                        <span className="designation">Co Founder</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Image Column */}
                        <div className="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <figure className="image-1 overlay-anim wow fadeInUp"><img src="/images/resource/about-9.jpg" title='Oitech' />
                                </figure>
                                <figure className="image-2 overlay-anim wow fadeInRight"><img src="/images/resource/about-10.jpg" title='Oitech' />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutFive;
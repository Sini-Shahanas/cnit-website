import Link from 'next/link';
import React from 'react';

const AboutOne = () => {
    return (
        <>
            <section className="about-section pt-0">
                {/* Features Section */}
                <div className="features-section pull-up pt-0">
                    <div className="auto-container">
                        <div className="outer-box">
                            <div className="row">
                                {/* Feature Block */}
                                <div className="feature-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                                    <div className="inner-box ">
                                        <div className="title-box">
                                            <i className="icon flaticon-business-002-graph" />
                                            <h5 className="title"><Link href="/page-about">Perfect Business Solutions</Link></h5>
                                        </div>
                                        <div className="text">When an unknown printer took <br />a galley type book.</div>
                                    </div>
                                </div>
                                {/* Feature Block */}
                                <div className="feature-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="400ms">
                                    <div className="inner-box ">
                                        <div className="title-box">
                                            <i className="icon flaticon-business-012-startup" />
                                            <h5 className="title"><Link href="/page-about">Perfect Business Solutions</Link></h5>
                                        </div>
                                        <div className="text">When an unknown printer took <br />a galley type book.</div>
                                    </div>
                                </div>
                                {/* Feature Block */}
                                <div className="feature-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="800ms">
                                    <div className="inner-box ">
                                        <div className="title-box">
                                            <i className="icon flaticon-business-046-like" />
                                            <h5 className="title"><Link href="/page-about">Perfect Business Solutions</Link></h5>
                                        </div>
                                        <div className="text">When an unknown printer took <br />a galley type book.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Features Section*/}
                <div className="auto-container">
                    <div className="row">
                        <div className="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-2 wow fadeInRight" data-wow-delay="600ms">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <span className="sub-title">About Our Company</span>
                                    <h2>We Execute Our ideas From The Start to Finish</h2>
                                    <div className="text">Web designing in a powerful way of just not an only professions, however, in a passion for our Company. We have to a tendency to believe the idea that smart looking of any website is the first impression on visitors.</div>
                                </div>
                                <div className="content-box">
                                    <div className="info-box">
                                        <h5 className="title">High Quality IT Solutions for Startup</h5>
                                        <Link href="/#" className="read-more">More <i className="fa fa-long-arrow-alt-right" /></Link>
                                    </div>
                                    <div className="about-block">
                                        <i className="icon flaticon-business-018-startup" />
                                        <h5 className="title">Manage Tech Services </h5>
                                        <div className="text">We’ve designed a culture that allows our stewards to assimilate</div>
                                    </div>
                                    <div className="about-block">
                                        <i className="icon flaticon-business-027-world" />
                                        <h5 className="title">Internal Networking</h5>
                                        <div className="text">We’ve designed a culture that allows our stewards to assimilate.</div>
                                    </div>
                                </div>
                                <div className="btm-box">
                                    <Link href="/page-about" className="theme-btn btn-style-one"><span className="btn-title">Discover more</span></Link>
                                </div>
                            </div>
                        </div>
                        {/* Image Column */}
                        <div className="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12">
                            <div className="inner-column wow fadeInLeft">
                                <figure className="image-1 overlay-anim wow fadeInUp"><img src="/images/resource/disc.jpg" title='Oitech' /></figure>
                                <figure className="image-2 overlay-anim wow fadeInRight"><img src="/images/resource/bookidea.jpg" title='Oitech' /></figure>
                                <div className="experience bounce-y">
                                    <img src="/images/resource/image-1.jpg" title="Oitech" className="icon" />
                                    <strong>3600+</strong> Satisfied Client
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutOne;
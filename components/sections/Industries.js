import Link from 'next/link';
import React from 'react';

const Industries = () => {
    return (
        <>
            <section className="industries-section">
                <div className="auto-container">
                    <div className="row">
                        {/* Title Column */}
                        <div className="title-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="sec-title light">
                                    <span className="sub-title">Our industries</span>
                                    <h2>We’re Dedicated to Serve you All Time</h2>
                                    <div className="text">Web designing in a powerful way of just not an only professions, however, in a passion for our Company. We have to a tendency to believe the idea that smart looking of any website is the first impression on visitors.</div>
                                </div>
                            </div>
                        </div>
                        <div className="image-column col-lg-6 col-md-12 col-sm-12">
                            <div className="image-box wow fadeIn">
                                <figure className="image"><img src="/images/resource/industries.jpg" title='Oitech' /></figure>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        {/* Feature Block Two */}
                        <div className="feature-block-two dark col-xl-2 col-lg-3 col-md-4 col-sm-6 wow fadeInUp">
                            <div className="inner-box ">
                                <i className="icon flaticon-business-011-dollar" />
                                <h6 className="title"><Link href="/page-service-details">Banking</Link></h6>
                            </div>
                        </div>
                        {/* Feature Block Two */}
                        <div className="feature-block-two dark col-xl-2 col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="200ms">
                            <div className="inner-box ">
                                <i className="icon flaticon-business-049-presentation" />
                                <h6 className="title"><Link href="/page-service-details">Healthcare</Link></h6>
                            </div>
                        </div>
                        {/* Feature Block Two */}
                        <div className="feature-block-two dark col-xl-2 col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="400ms">
                            <div className="inner-box ">
                                <i className="icon flaticon-business-061-meeting" />
                                <h6 className="title"><Link href="/page-service-details">Education</Link></h6>
                            </div>
                        </div>
                        {/* Feature Block Two */}
                        <div className="feature-block-two dark col-xl-2 col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="600ms">
                            <div className="inner-box ">
                                <i className="icon flaticon-business-030-settings" />
                                <h6 className="title"><Link href="/page-service-details">Manufacturing</Link></h6>
                            </div>
                        </div>
                        {/* Feature Block Two */}
                        <div className="feature-block-two dark col-xl-2 col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="800ms">
                            <div className="inner-box ">
                                <i className="icon flaticon-business-054-graph" />
                                <h6 className="title"><Link href="/page-service-details">Capital Markets</Link></h6>
                            </div>
                        </div>
                        {/* Feature Block Two */}
                        <div className="feature-block-two dark col-xl-2 col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="1000ms">
                            <div className="inner-box ">
                                <i className="icon flaticon-business-020-hierarchy" />
                                <h6 className="title"><Link href="/page-service-details">Networking</Link></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Industries;
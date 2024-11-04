import Link from 'next/link';
import React from 'react';

const IndustriesTwo = () => {
    return (
        <>
            <section className="industries-section style-two">
                <div className="auto-container">
                    <div className="sec-title text-center light">
                        <span className="sub-title">Services we’re offering</span>
                        <h2>We’re Dedicated to Serve <br />you All Time</h2>
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
                        <div className="feature-block-two dark col-xl-2 col-lg-3 col-md-4 col-sm-6 wow fadeInUp">
                            <div className="inner-box ">
                                <i className="icon flaticon-business-049-presentation" />
                                <h6 className="title"><Link href="/page-service-details">Healthcare</Link></h6>
                            </div>
                        </div>
                        {/* Feature Block Two */}
                        <div className="feature-block-two dark col-xl-2 col-lg-3 col-md-4 col-sm-6 wow fadeInUp">
                            <div className="inner-box ">
                                <i className="icon flaticon-business-061-meeting" />
                                <h6 className="title"><Link href="/page-service-details">Education</Link></h6>
                            </div>
                        </div>
                        {/* Feature Block Two */}
                        <div className="feature-block-two dark col-xl-2 col-lg-3 col-md-4 col-sm-6 wow fadeInUp">
                            <div className="inner-box ">
                                <i className="icon flaticon-business-030-settings" />
                                <h6 className="title"><Link href="/page-service-details">Manufacturing</Link></h6>
                            </div>
                        </div>
                        {/* Feature Block Two */}
                        <div className="feature-block-two dark col-xl-2 col-lg-3 col-md-4 col-sm-6 wow fadeInUp">
                            <div className="inner-box ">
                                <i className="icon flaticon-business-054-graph" />
                                <h6 className="title"><Link href="/page-service-details">Capital Markets</Link></h6>
                            </div>
                        </div>
                        {/* Feature Block Two */}
                        <div className="feature-block-two dark col-xl-2 col-lg-3 col-md-4 col-sm-6 wow fadeInUp">
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

export default IndustriesTwo;
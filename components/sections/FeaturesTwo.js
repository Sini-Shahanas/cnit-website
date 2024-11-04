import Link from 'next/link';
import React from 'react';

const FeaturesTwo = () => {
    return (
        <>
            <section className="features-section-two pt-0">
                <div className="auto-container">
                    <div className="row justify-content-center">
                        <div className="feature-block-two col-xl-2 col-lg-3 col-md-4 col-sm-6 wow fadeInUp">
                            <div className="inner-box ">
                                <i className="icon flaticon-business-011-dollar" />
                                <h6 className="title"><Link href="/page-service-details">Banking</Link></h6>
                            </div>
                        </div>
                        <div className="feature-block-two col-xl-2 col-lg-3 col-md-4 col-sm-6 wow fadeInUp">
                            <div className="inner-box ">
                                <i className="icon flaticon-business-049-presentation" />
                                <h6 className="title"><Link href="/page-service-details">Healthcare</Link></h6>
                            </div>
                        </div>
                        <div className="feature-block-two col-xl-2 col-lg-3 col-md-4 col-sm-6 wow fadeInUp">
                            <div className="inner-box ">
                                <i className="icon flaticon-business-061-meeting" />
                                <h6 className="title"><Link href="/page-service-details">Education</Link></h6>
                            </div>
                        </div>
                        <div className="feature-block-two col-xl-2 col-lg-3 col-md-4 col-sm-6 wow fadeInUp">
                            <div className="inner-box ">
                                <i className="icon flaticon-business-030-settings" />
                                <h6 className="title"><Link href="/page-service-details">Manufacturing</Link></h6>
                            </div>
                        </div>
                        <div className="feature-block-two col-xl-2 col-lg-3 col-md-4 col-sm-6 wow fadeInUp">
                            <div className="inner-box ">
                                <i className="icon flaticon-business-054-graph" />
                                <h6 className="title"><Link href="/page-service-details">Capital Markets</Link></h6>
                            </div>
                        </div>
                        <div className="feature-block-two col-xl-2 col-lg-3 col-md-4 col-sm-6 wow fadeInUp">
                            <div className="inner-box ">
                                <i className="icon flaticon-business-020-hierarchy" />
                                <h6 className="title"><Link href="/page-service-details">Networking</Link></h6>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-text">IT Technology services built specifically for your business. <Link href="/page-services" className="theme-btn btn-style-one small"><span className="btn-title">Find Your Solution</span></Link></div>
                </div>
            </section>
        </>
    );
};

export default FeaturesTwo;
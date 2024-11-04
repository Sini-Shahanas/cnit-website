import Link from 'next/link';
import React from 'react';

const AboutFour = () => {
    return (
        <>
            <section className="about-section-four">
                <div className="auto-container">
                    <div className="row">
                        <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2 wow fadeInRight" data-wow-delay="600ms">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <span className="sub-title">What else here</span>
                                    <h2>We’re Leading in IT Technology Market</h2>
                                    <div className="text">There are many variations of passages of lorem free market to available, but the majority have alteration in some form, by injected humour, or randomised words.</div>
                                </div>
                                <blockquote className="blockquote-style-one">Lorem Ipsum is simply dummy available typesetting industry been the industry standard.</blockquote>
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
                        <div className="image-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column wow fadeInLeft">
                                <span className="float-text">oitech</span>
                                <figure className="image-1 overlay-anim wow fadeInUp"><img src="/images/resource/about-7.jpg" title='Oitech' /></figure>
                                <figure className="image-2 overlay-anim wow fadeInRight"><img src="/images/resource/about-8.jpg" title='Oitech' /></figure>
                                <div className="icon-box"><img src="/images/resource/icon-logo-2.png" title='Oitech' /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutFour;
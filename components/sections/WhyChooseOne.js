import React from 'react';

const WhyChooseOne = () => {
    return (
        <>
             <section className="why-choose-us">
                    <div className="auto-container">
                        <div className="row">
                            <div className="content-column col-lg-6 col-md-12 col-sm-12 wow fadeInRight" data-wow-delay="600ms">
                                <div className="inner-column">
                                    <div className="sec-title">
                                        <span className="sub-title">Why you should choose us</span>
                                        <h2>We are Trusted by More Than <span className="color2">1,250</span><br /> Clients</h2>
                                    </div>
                                    <div className="image-box">
                                        <figure className="image overlay-anim"><img src="/images/resource/why-us-2.jpg" title='Oitech' /></figure>
                                        <div className="caption">Professional IT Experts for Tech Solutions</div>
                                    </div>
                                </div>
                            </div>
                            {/* Image Column */}
                            <div className="image-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-column wow fadeInLeft">
                                    <figure className="image overlay-anim wow fadeInUp"><img src="/images/resource/why-us-1.jpg" title='Oitech' />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </>
    );
};

export default WhyChooseOne;
import Link from 'next/link';
import React from 'react';

const FeaturesFive = () => {
    return (
        <>
            <section className="features-section-five">
                <div className="auto-container">
                    <div className="row">
                        {/* Feature Block Five */}
                        <div className="feature-block-five col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box ">
                                <figure className="bg-image"><img src="/images/resource/feature-bg-3.jpg" title='Oitech' /></figure>
                                <h4 className="title"><Link href="/page-about">Product <br />Designing</Link></h4>
                                <div className="text">Neque porro quisquam est, qui dolorem ipsum quia dolor.</div>
                                <span className="count">01</span>
                            </div>
                        </div>
                        {/* Feature Block Five */}
                        <div className="feature-block-five col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                            <div className="inner-box ">
                                <figure className="bg-image"><img src="/images/resource/feature-bg-4.jpg" title='Oitech' /></figure>
                                <h4 className="title"><Link href="/page-about">Custom <br />Solutions</Link></h4>
                                <div className="text">Neque porro quisquam est, qui dolorem ipsum quia dolor.</div>
                                <span className="count">02</span>
                            </div>
                        </div>
                        {/* Feature Block Five */}
                        <div className="feature-block-five col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                            <div className="inner-box ">
                                <figure className="bg-image"><img src="/images/resource/feature-bg-5.jpg" title='Oitech' /></figure>
                                <h4 className="title"><Link href="/page-about">Tech <br />Outsourc</Link></h4>
                                <div className="text">Neque porro quisquam est, qui dolorem ipsum quia dolor.</div>
                                <span className="count">03</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FeaturesFive;
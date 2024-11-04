import React from 'react';
import Accordion from '../elements/Accordion';

const Faq = () => {
    return (
        <>
            <section className="faqs-section style-two">
                <div className="auto-container">
                    <div className="row">
                        {/* FAQ Column */}
                        <div className="faq-column col-xl-6 col-lg-12 col-md-12 order-4">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <span className="sub-title">Questions &amp; answers</span>
                                    <h2>See Frequently Asked Questions</h2>
                                </div>
                                <Accordion />
                            </div>
                        </div>
                        {/* image Column */}
                        <div className="image-column col-xl-6 col-lg-12 col-md-12">
                            <div className="inner-column">
                                <figure className="image"><img src="/images/resource/faq.jpg" title='Oitech' /></figure>
                                <div className="info-box">
                                    <div className="inner">
                                        <span className="icon flaticon-business-063-diamond" />
                                        <h3 className="title">Trusted IT Solution<br /> &amp; Service Business Agency</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Faq;
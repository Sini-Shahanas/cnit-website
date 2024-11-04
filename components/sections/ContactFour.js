import Link from 'next/link';
import React from 'react';
import CounterUp from '../elements/CounterUp';

const ContactFour = () => {
    return (
        <>
            <section className="contact-section-four pt-0">
                <div className="auto-container">
                    {/* Fact Counter */}
                    <div className="fact-counter">
                        <div className="row">
                            {/* Counter block*/}
                            <div className="counter-block-three col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
                                <div className="inner">
                                    <div className="count-box">
                                        <CounterUp className="count-text" count={4520} time={3} />
                                    </div>
                                    <h6 className="counter-title">Project completed</h6>
                                </div>
                            </div>
                            {/*Counter block*/}
                            <div className="counter-block-three col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                                <div className="inner">
                                    <div className="count-box">
                                        <CounterUp className="count-text" count={325} time={3} />
                                    </div>
                                    <h6 className="counter-title">IT specialists</h6>
                                </div>
                            </div>
                            {/*Counter block*/}
                            <div className="counter-block-three col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                                <div className="inner">
                                    <div className="count-box">
                                        <CounterUp className="count-text" count={1357} time={3} />
                                    </div>
                                    <h6 className="counter-title">Satisfied clients</h6>
                                </div>
                            </div>
                            {/*Counter block*/}
                            <div className="counter-block-three col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="900ms">
                                <div className="inner">
                                    <div className="count-box">
                                        <CounterUp className="count-text" count={238} time={3} />
                                    </div>
                                    <h6 className="counter-title">Smart solutions</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/* Info Column */}
                        <div className="info-column col-lg-7 col-md-12 col-sm-12">
                            <div className="inner-column wow fadeInRight">
                                <div className="title-box">
                                    <h3 className="title">Best IT Technology <br />Services you can Trust</h3>
                                </div>
                                <div className="our-values">
                                    <figure className="image"><img src="/images/resource/our-value.jpg" title='Oitech' /></figure>
                                    <div className="content">
                                        <h5 className="title">Manage Tech Services</h5>
                                        <div className="text">Web designing in a powerful way of just not an only professions, however, in a passion for our Company. We have to a tendency to believe the idea that smart looking</div>
                                    </div>
                                </div>
                                <div className="info-box">
                                    <figure className="image"><img src="/images/resource/our-value-2.jpg" title='Oitech' /></figure>
                                    <div className="counter-block-two">
                                        <div className="count-box">
                                            <CounterUp className="count-text" count={4520} time={3} />
                                        </div>
                                        <h6 className="counter-title">Clients worldwide took Professional IT services</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-column col-lg-5 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="contact-form-three wow fadeInLeft">
                                    <div className="title-box">
                                        <h3 className="title">Get a Free <br />Quote</h3>
                                        <div className="text">There are many variations of passages</div>
                                    </div>
                                    {/*Contact Form*/}
                                    <form method="post" action="#" id="contact-form">
                                        <div className="form-group">
                                            <input type="text" name="full_name" placeholder="Your Name" required />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" name="Email" placeholder="Email Address" required />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="Phone" placeholder="Phone Number" required />
                                        </div>
                                        <div className="form-group">
                                            <select className="custom-select">
                                                <option value="Product Development">Product Development</option>
                                                <option value="UI/UX Designing">UI/UX Designing</option>
                                                <option value="Digital Marketing">Digital Marketing</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <button className="theme-btn btn-style-one" type="submit" name="submit-form"><span className="btn-title">Send a message</span></button>
                                        </div>
                                    </form>
                                </div>
                                {/*End Contact Form */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactFour;
import Link from 'next/link';
import React, { useState } from 'react';
import ProjectSlider3 from '../slider/ProjectSlider3';

const WorkSection = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    const handleOnClick = (index) => {
        setActiveIndex(index); // remove the curly braces
    };
    return (
        <>
            <section className="work-section">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <span className="sub-title">Tech Management</span>
                        <h2>The Best Source for <br /> IT Solutions</h2>
                    </div>
                    <div className="tabs-box work-tabs">
                        {/*Tabs Box*/}
                        <ul className="tab-buttons clearfix">
                            <li className={activeIndex === 1 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(1)}>Gaming</li>
                            <li className={activeIndex === 2 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(2)}>Entertainment</li>
                            <li className={activeIndex === 3 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(3)}>Tech Solution</li>
                        </ul>
                        <div className="tabs-content">
                            {/*Tab*/}
                            <div className={activeIndex === 1 ? "tab active-tab" : "tab"}>
                                <div className="row">
                                    {/* Content Column */}
                                    <div className="content-column col-xl-7 col-lg-6 col-md-12 order-2">
                                        <div className="inner-column">
                                            <h3>We Execute Our ideas From The Start to Finish 1</h3>
                                            <div className="text">Web designing in a powerful way of just not an only professions, however, in a passion for our Company.</div>
                                            <div className="content-box">
                                                <div className="about-block-two">
                                                    <h5 className="title"><i className="icon fa fa-angle-right" /> Cloud Based Services </h5>
                                                    <p className="text">Web designing in a powerful way of just</p>
                                                </div>
                                                <div className="about-block-two">
                                                    <h5 className="title"><i className="icon fa fa-angle-right" /> End to End Solutions </h5>
                                                    <p className="text">Web designing in a powerful way of just</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Image Column */}
                                    <div className="image-column col-xl-5 col-lg-6 col-md-12">
                                        <figure className="image overlay-anim"><img src="/images/resource/work-1.jpg" title='Oitech' /></figure>
                                    </div>
                                </div>
                            </div>
                            {/*Tab*/}
                            <div className={activeIndex === 2 ? "tab active-tab" : "tab"}>
                                <div className="row">
                                    {/* Content Column */}
                                    <div className="content-column col-xl-7 col-lg-6 col-md-12 order-2">
                                        <div className="inner-column">
                                            <h3>We Execute Our ideas From The Start to Finish 2</h3>
                                            <div className="text">Web designing in a powerful way of just not an only professions, however, in a passion for
                                                our Company.</div>
                                            <div className="content-box">
                                                <div className="about-block-two">
                                                    <h5 className="title"><i className="icon fa fa-angle-right" /> Cloud Based Services </h5>
                                                    <p className="text">Web designing in a powerful way of just</p>
                                                </div>
                                                <div className="about-block-two">
                                                    <h5 className="title"><i className="icon fa fa-angle-right" /> End to End Solutions </h5>
                                                    <p className="text">Web designing in a powerful way of just</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Image Column */}
                                    <div className="image-column col-xl-5 col-lg-6 col-md-12">
                                        <figure className="image overlay-anim"><img src="/images/resource/work-1.jpg" title='Oitech' /></figure>
                                    </div>
                                </div>
                            </div>
                            {/*Tab*/}
                            <div className={activeIndex === 3 ? "tab active-tab" : "tab"}>
                                <div className="row">
                                    {/* Content Column */}
                                    <div className="content-column col-xl-7 col-lg-6 col-md-12 order-2">
                                        <div className="inner-column">
                                            <h3>We Execute Our ideas From The Start to Finish 3</h3>
                                            <div className="text">Web designing in a powerful way of just not an only professions, however, in a passion for
                                                our Company.</div>
                                            <div className="content-box">
                                                <div className="about-block-two">
                                                    <h5 className="title"><i className="icon fa fa-angle-right" /> Cloud Based Services </h5>
                                                    <p className="text">Web designing in a powerful way of just</p>
                                                </div>
                                                <div className="about-block-two">
                                                    <h5 className="title"><i className="icon fa fa-angle-right" /> End to End Solutions </h5>
                                                    <p className="text">Web designing in a powerful way of just</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Image Column */}
                                    <div className="image-column col-xl-5 col-lg-6 col-md-12">
                                        <figure className="image overlay-anim"><img src="/images/resource/work-1.jpg" title='Oitech' /></figure>
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

export default WorkSection;
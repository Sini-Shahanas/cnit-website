import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

const WhyChooseTwo = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <section className="why-choose-us-two pt-0">
                <div className="auto-container">
                    <div className="row">
                        <div className="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 wow fadeInLeft" data-wow-delay="600ms">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <span className="sub-title">why choose our company</span>
                                    <h2>Why you Should Choose Our Services?</h2>
                                    <div className="text">There are many variations of passages of but the majority have in some form, by injected humou or words which don't look even slightly believable of but the majority have suffered.</div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="info-box">
                                            <i className="icon fa fa-check-circle" />
                                            <h6 className="title">Integer et massa sit</h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="info-box">
                                            <i className="icon fa fa-check-circle" />
                                            <h6 className="title">Integer et massa sit</h6>
                                        </div>
                                    </div>
                                </div>

                                <div className="skills">
                                    <div className="skill-item">
                                        <div className="skill-header">
                                            <h6 className="skill-title">Technology</h6>
                                        </div>
                                        <div className="skill-bar">
                                            <div className="bar-inner">
                                                <div className="bar progress-line" data-width={77} style={{width: `77%`}} >
                                                    <div className="skill-percentage">
                                                        <div className="count-box">
                                                            <span className="count-text" data-speed={3000} data-stop={77}>77</span>%
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="skills">
                                    <div className="skill-item">
                                        <div className="skill-header">
                                            <h6 className="skill-title">Solutions</h6>
                                        </div>
                                        <div className="skill-bar">
                                            <div className="bar-inner">
                                                <div className="bar progress-line" data-width={95} style={{width: `95%`}} >
                                                    <div className="skill-percentage">
                                                        <div className="count-box">
                                                            <span className="count-text" data-speed={3000} data-stop={95}>95</span>%
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* Image Column */}
                        <div className="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12">
                            <div className="image-box wow fadeInRight">
                                <figure className="image overlay-anim">
                                    <img src="/images/resource/why-us-3.jpg" title='Oitech' />
                                    <a onClick={() => setOpen(true)} className="play-btn lightbox-image"><i className="icon fa fa-play" /></a>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
        </>
    );
};

export default WhyChooseTwo;
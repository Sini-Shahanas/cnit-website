import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
const OfferTwo = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <section className="offer-section-two">
                    <div className="auto-container">
                        <div className="row">
                            {/* Content Column */}
                            <div className="content-column col-lg-6 col-md-12">
                                <div className="inner-column">
                                    <div className="sec-title">
                                        <span className="sub-title">Welcome to tech</span>
                                        <h2>Your Success with the Best IT Solutions</h2>
                                    </div>
                                    <div className="info-box">
                                        <span className="count">01</span>
                                        <div className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry when an unknown printer.</div>
                                    </div>
                                    <div className="info-box">
                                        <span className="count">02</span>
                                        <div className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry when an unknown printer.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Content Column */}
                            <div className="image-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <div className="image-box">
                                        <figure className="image"><img src="/images/resource/image-6.jpg" title='Oitech' /></figure>
                                        <div className="video-box wow fadeIn">
                                            <h4 className="title">Watch our video</h4>
                                            <img className="arrow-icon" src="/images/icons/icon-arrow.png" title='Oitech' />
                                            <a className="play-btn lightbox-image" onClick={() => setOpen(true)}><i className="icon fa fa-play" /></a>
                                            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
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

export default OfferTwo;
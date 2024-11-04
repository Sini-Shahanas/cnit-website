import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
const OfferOne = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <section className="offer-section">
                <div className="auto-container">
                    <div className="row">
                        <div className="content-column col-lg-6 col-md-12">
                            <div className="inner-column">
                                <div className="sec-title light">
                                    <span className="sub-title">Tech management</span>
                                    <h2>The Best Source for IT Solutions</h2>
                                    <div className="text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu convenient scheduling, account fugiat nulla pariatur.</div>
                                </div>
                                <div className="info-box">
                                    <i className="icon flaticon-business-036-idea" />
                                    <h5 className="title">We’re doing the right thing.<br /> The right way.</h5>
                                </div>
                                <ul className="list-style-two">
                                    <li><i className="fa fa-check-circle" /> Lorem Ipsum is not simply random text</li>
                                    <li><i className="fa fa-check-circle" /> Making this the first true generator on the Internet</li>
                                    <li><i className="fa fa-check-circle" /> Various versions have evolved over the years</li>
                                </ul>
                            </div>
                        </div>
                        <div className="image-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="image-box">
                                    <figure className="image"><img src="/images/resource/image-3.jpg" title='Oitech' /></figure>
                                    <div className="caption-box wow slideInRight">
                                        <div className="icon-box">
                                            <a onClick={() => setOpen(true)} className="play-now-two lightbox-image"><i className="icon fa fa-play" /></a>
                                        </div>
                                        <div className="title-box">
                                            <h5 className="title">Professional IT technology services you can trust</h5>
                                        </div>
                                    </div>
                                    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default OfferOne;
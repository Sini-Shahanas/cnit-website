import Link from 'next/link';
import React from 'react';

const TeamTwo = () => {
    return (
        <>
            <section className="team-section-two">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <span className="sub-title">Our team expert</span>
                        <h2>Meet Professionals</h2>
                    </div>
                    <div className="row">
                        {/* Team block */}
                        <div className="team-block-two col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="info-box">
                                    <h5 className="name"><Link href="/page-team-details">Adman Michel</Link></h5>
                                    <span className="designation">Web Developer</span>
                                    <span className="share-icon fa fa-share-alt" />
                                    <div className="social-links">
                                        <Link href="/#"><i className="fab fa-twitter" /></Link>
                                        <Link href="/#"><i className="fab fa-facebook-f" /></Link>
                                        <Link href="/#"><i className="fab fa-pinterest-p" /></Link>
                                        <Link href="/#"><i className="fab fa-instagram" /></Link>
                                    </div>
                                </div>
                                <div className="image-box">
                                    <figure className="image"><Link href="/page-team-details"><img src="/images/resource/team-4.jpg" title='Oitech' /></Link></figure>
                                </div>
                            </div>
                        </div>
                        {/* Team block */}
                        <div className="team-block-two col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="400ms">
                            <div className="inner-box">
                                <div className="info-box">
                                    <h5 className="name"><Link href="/page-team-details">Jessica Brown</Link></h5>
                                    <span className="designation">Web Developer</span>
                                    <span className="share-icon fa fa-share-alt" />
                                    <div className="social-links">
                                        <Link href="/#"><i className="fab fa-twitter" /></Link>
                                        <Link href="/#"><i className="fab fa-facebook-f" /></Link>
                                        <Link href="/#"><i className="fab fa-pinterest-p" /></Link>
                                        <Link href="/#"><i className="fab fa-instagram" /></Link>
                                    </div>
                                </div>
                                <div className="image-box">
                                    <figure className="image"><Link href="/page-team-details"><img src="/images/resource/team-5.jpg" title='Oitech' /></Link></figure>
                                </div>
                            </div>
                        </div>
                        {/* Team block */}
                        <div className="team-block-two col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="800ms">
                            <div className="inner-box">
                                <div className="info-box">
                                    <h5 className="name"><Link href="/page-team-details">Richerd William</Link></h5>
                                    <span className="designation">Web Developer</span>
                                    <span className="share-icon fa fa-share-alt" />
                                    <div className="social-links">
                                        <Link href="/#"><i className="fab fa-twitter" /></Link>
                                        <Link href="/#"><i className="fab fa-facebook-f" /></Link>
                                        <Link href="/#"><i className="fab fa-pinterest-p" /></Link>
                                        <Link href="/#"><i className="fab fa-instagram" /></Link>
                                    </div>
                                </div>
                                <div className="image-box">
                                    <figure className="image"><Link href="/page-team-details"><img src="/images/resource/team-6.jpg" title='Oitech' /></Link></figure>
                                </div>
                            </div>
                        </div>
                        {/* Team block */}
                        <div className="team-block-two col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="1200ms">
                            <div className="inner-box">
                                <div className="info-box">
                                    <h5 className="name"><Link href="/page-team-details">Sara Albert</Link></h5>
                                    <span className="designation">Web Developer</span>
                                    <span className="share-icon fa fa-share-alt" />
                                    <div className="social-links">
                                        <Link href="/#"><i className="fab fa-twitter" /></Link>
                                        <Link href="/#"><i className="fab fa-facebook-f" /></Link>
                                        <Link href="/#"><i className="fab fa-pinterest-p" /></Link>
                                        <Link href="/#"><i className="fab fa-instagram" /></Link>
                                    </div>
                                </div>
                                <div className="image-box">
                                    <figure className="image"><Link href="/page-team-details"><img src="/images/resource/team-7.jpg" title='Oitech' /></Link></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TeamTwo;
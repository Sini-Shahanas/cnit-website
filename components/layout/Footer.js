import Link from 'next/link';
import React from 'react';
import Image from 'next/image'
import LogoWhite from './../../public/images/logo.png';
import LogoDark from './../../public/images/logo-2.png';

const Footer = () => {
    return (
        <>

            <footer className="main-footer">
                <div className="bg-image" style={{ backgroundImage: 'url(./images/background/background2.jpg)' }} />
                <div className="widgets-section">
                    <div className="auto-container">
                        <div className="row">
                            <div className="footer-column col-xl-3 col-lg-12 col-md-6 col-sm-12">
                                <div className="footer-widget about-widget">
                                    <div className="logo"><Link href="/"><Image src={LogoWhite} alt="block" /></Link></div>
                                    <div className="text">Innovative, scalable and future-ready solutions that redefine the way you operate in the digital landscape.</div>
                                    <ul className="social-icon-two">
                                        <li><Link href="https://twitter.com/cloudnativeits"><i className="fab fa-twitter" /></Link></li>
                                        <li><Link href="https://www.facebook.com/cloud.native.it.solutions"><i className="fab fa-facebook" /></Link></li>
                                        <li><Link href="https://www.linkedin.com/company/cloud-native-it-solutions"><i className="fab fa-linkedin-in" /></Link></li>
                                        <li><Link href="https://www.instagram.com/cloudnativeits/"><i className="fab fa-instagram" /></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="footer-column col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                <div className="footer-widget">
                                    <h3 className="widget-title">Explore</h3>
                                    <ul className="user-links">
                                        <li><Link href="/page-about">About Company</Link></li>
                                        {/* <li><Link href="#">Meet the Team</Link></li> */}
                                        <li><Link href="/news-grid">News &amp; Media</Link></li>
                                        <li><Link href="/page-services">Our Services</Link></li>
                                        <li><Link href="/page-contact">Contact</Link></li>
                                    </ul>
                                </div> 
                            </div>
                            <div className="footer-column col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                <div className="footer-widget contact-widget">
                                    <h3 className="widget-title">Contact</h3>
                                    <div className="widget-content">
                                        <div className="text">Crystal Building, Al Karama, Dubai, UAE</div>
                                        <ul className="contact-info">
                                            <li><i className="fa fa-envelope" /> <Link href="mailto:info@cnitsolution.com">info@cnitsolution.com</Link><br /></li>
                                            <li><i className="fa fa-phone-square" /> <Link href="tel:+97148347705">+971 4 834 7705</Link><br /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="footer-column col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                <div className="footer-widget gallery-widget">
                                    <h3 className="widget-title">Gallery</h3>
                                    <div className="widget-content">
                                        <div className="outer clearfix">
                                            <figure className="image">
                                                <a href="#"><img src="/images/resource/project-thumb-1.jpg" title='Oitech' /></a>
                                            </figure>
                                            <figure className="image">
                                                <a href="#"><img src="/images/resource/project-thumb-2.jpg" title='Oitech' /></a>
                                            </figure>
                                            <figure className="image">
                                                <a href="#"><img src="/images/resource/project-thumb-3.jpg" title='Oitech' /></a>
                                            </figure>
                                            <figure className="image">
                                                <a href="#"><img src="/images/resource/project-thumb-4.jpg" title='Oitech' /></a>
                                            </figure>
                                            <figure className="image">
                                                <a href="#"><img src="/images/resource/project-thumb-5.jpg" title='Oitech' /></a>
                                            </figure>
                                            <figure className="image">
                                                <a href="#"><img src="/images/resource/project-thumb-6.jpg" title='Oitech' /></a>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                {/* <div className="footer-bottom">
                    <div className="auto-container">
                        <div className="inner-container">
                            <div className="copyright-text">© Copyright 2023 by  <a href="https://themeforest.net/user/thememascot/portfolio">Company.com</a>
                            </div>
                        </div>
                    </div>
                </div> */}
            </footer>


        </>
    );
};

export default Footer;
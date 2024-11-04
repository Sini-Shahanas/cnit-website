import Link from 'next/link';
import React from 'react';

const LocationOne = () => {
    return (
        <>
            <section className="locations-section">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <span className="sub-title">Visit Us Today</span>
                        <h2>Our Locations</h2>
                    </div>
                    <div className="map-box">
                        <figure className="map"><img src="/images/icons/dotted-map.png" title='Oitech' /></figure>
                        {/* Location 1*/}
                        <div className="location location-1">
                            <span className="location-dot" />
                            <div className="location-info">
                                <ul className="info-list">
                                    <li><Link href="tel:+880123456789">+880123456789</Link></li>
                                    <li>88 Broklyn Golden Street.</li>
                                    <li><Link href="mailto:needhelp@company.com">needhelp@company.com</Link></li>
                                </ul>
                            </div>
                        </div>
                        {/* Location 2*/}
                        <div className="location location-2">
                            <span className="location-dot" />
                            <div className="location-info">
                                <ul className="info-list">
                                    <li><Link href="tel:+880123456789">+880123456789</Link></li>
                                    <li>88 Broklyn Golden Street.</li>
                                    <li><Link href="mailto:needhelp@company.com">needhelp@company.com</Link></li>
                                </ul>
                            </div>
                        </div>
                        {/* Location 3*/}
                        <div className="location location-3 align-center">
                            <span className="location-dot" />
                            <div className="location-info">
                                <ul className="info-list">
                                    <li><Link href="tel:+880123456789">+880123456789</Link></li>
                                    <li>88 Broklyn Golden Street.</li>
                                    <li><Link href="mailto:needhelp@company.com">needhelp@company.com</Link></li>
                                </ul>
                            </div>
                        </div>
                        {/* Location 4*/}
                        <div className="location location-4 align-right">
                            <span className="location-dot" />
                            <div className="location-info">
                                <ul className="info-list">
                                    <li><Link href="tel:+880123456789">+880123456789</Link></li>
                                    <li>88 Broklyn Golden Street.</li>
                                    <li><Link href="mailto:needhelp@company.com">needhelp@company.com</Link></li>
                                </ul>
                            </div>
                        </div>
                        {/* Location 5*/}
                        <div className="location location-5 align-right">
                            <span className="location-dot" />
                            <div className="location-info">
                                <ul className="info-list">
                                    <li><Link href="tel:+880123456789">+880123456789</Link></li>
                                    <li>88 Broklyn Golden Street.</li>
                                    <li><Link href="mailto:needhelp@company.com">needhelp@company.com</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default LocationOne;
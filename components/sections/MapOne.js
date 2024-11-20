import Link from 'next/link';
import React from 'react';

const MapOne = () => {
    return (
        <>
            <section className="map-section">
                {/* <iframe className="map" src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed">
                </iframe> */}
                <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.8469944188605!2d55.294736574026686!3d25.24207792988394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4e9b8f11fc5f1e0f%3A0x1f7408389dd86f6b!2sCloud%20Native%20IT%20Solutions!5e0!3m2!1sen!2sae!4v1732137683403!5m2!1sen!2sae">
                </iframe>
                <div className="branches-outer">
                    <div className="auto-container">
                        <div className="row">
                            {/* Branch Block */}
                            {/* <div className="branch-block col-lg-4 col-md-12 col-sm-12">
                                <div className="inner-box">
                                    <h5 className="title">New York</h5>
                                    <ul className="info-list">
                                        <li><i className="fa fa-phone" /> <Link href="tel:666888000">666 888 000</Link><br /></li>
                                        <li><i className="fa fa-envelope" /> <Link href="mailto:needhelp@company.com">needhelp@company.com</Link><br /></li>
                                        <li><i className="fa fa-map-marker-alt" /> 35 Deerfield Valdosta Road, United Kingdom</li>
                                    </ul>
                                </div>
                            </div> */}
                            {/* Branch Block */}
                            {/* <div className="branch-block col-lg-4 col-md-12 col-sm-12">
                                <div className="inner-box">
                                    <h5 className="title">Washington DC</h5>
                                    <ul className="info-list">
                                        <li><i className="fa fa-phone" /> <Link href="tel:666888000">666 888 000</Link><br /></li>
                                        <li><i className="fa fa-envelope" /> <Link href="mailto:needhelp@company.com">needhelp@company.com</Link><br /></li>
                                        <li><i className="fa fa-map-marker-alt" /> 35 Deerfield Valdosta Road, United Kingdom</li>
                                    </ul>
                                </div>
                            </div> */}
                            {/* Branch Block */}
                            {/* <div className="branch-block col-lg-4 col-md-12 col-sm-12">
                                <div className="inner-box">
                                    <h5 className="title">Las Vegas</h5>
                                    <ul className="info-list">
                                        <li><i className="fa fa-phone" /> <Link href="tel:666888000">666 888 000</Link><br /></li>
                                        <li><i className="fa fa-envelope" /> <Link href="mailto:needhelp@company.com">needhelp@company.com</Link><br /></li>
                                        <li><i className="fa fa-map-marker-alt" /> 35 Deerfield Valdosta Road, United Kingdom</li>
                                    </ul>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MapOne;
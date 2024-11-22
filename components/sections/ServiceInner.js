import Link from 'next/link';
import React from 'react';

const ServiceOne = () => {
    return (
        <>
            <section className="services-section">
                <div className="auto-container">
                    <div className="row">
                        <div className="service-block col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="/service-software-solutions"><img src="/images/resource/serve2.jpg" title='Oitech' /></Link></figure>
                                    {/* <div className="icon-box"><i className="icon flaticon-business-010-startup" /></div> */}
                                </div>
                                <div className="content-box">
                                    <h5 className="title"><Link href="/service-software-solutions">Software Solution</Link></h5>
                                    <div className="text">We’ve designed a culture that allows our stewards to assimilate</div>
                                    <Link href="/service-software-solutions" className="read-more">read More <i className="fa fa-long-arrow-alt-right" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="service-block col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="/service-infrastructure-solution"><img src="/images/resource/serve4.jpg" title='Oitech' /></Link></figure>
                                    {/* <div className="icon-box"><i className="icon flaticon-business-002-graph" /></div> */}
                                </div>
                                <div className="content-box">
                                    <h5 className="title"><Link href="/service-infrastructure-solution">IT Infrastructure Solution</Link></h5>
                                    <div className="text">We’ve designed a culture that allows our stewards to assimilate</div>
                                    <Link href="/service-infrastructure-solution" className="read-more">read More <i className="fa fa-long-arrow-alt-right" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="service-block col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="/service-cyber-x"><img src="/images/resource/serve1.jpg" title='Oitech' /></Link></figure>
                                    {/* <div className="icon-box"><i className="icon flaticon-business-048-coin" /></div> */}
                                </div>
                                <div className="content-box">
                                    <h5 className="title"><Link href="/service-cyber-x">Cyber Security</Link></h5>
                                    <div className="text">We’ve designed a culture that allows our stewards to assimilate</div>
                                    <Link href="/service-cyber-x" className="read-more">read More <i className="fa fa-long-arrow-alt-right" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="service-block col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="/internet-of-things"><img src="/images/resource/serve3.jpg" title='Oitech' /></Link></figure>
                                    {/* <div className="icon-box"><i className="icon flaticon-business-010-startup" /></div> */}
                                </div>
                                <div className="content-box">
                                    <h5 className="title"><Link href="/internet-of-things">Internet of Things (IoT)</Link></h5>
                                    <div className="text">We’ve designed a culture that allows our stewards to assimilate</div>
                                    <Link href="/internet-of-things" className="read-more">read More <i className="fa fa-long-arrow-alt-right" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="service-block col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="/service-details"><img src="/images/resource/serve5.jpg" title='Oitech' /></Link></figure>
                                    {/* <div className="icon-box"><i className="icon flaticon-business-048-coin" /></div> */}
                                </div>
                                <div className="content-box">
                                    <h5 className="title"><Link href="/service-details">Service & Maintenance</Link></h5>
                                    <div className="text">We’ve designed a culture that allows our stewards to assimilate</div>
                                    <Link href="/service-details" className="read-more">read More <i className="fa fa-long-arrow-alt-right" /></Link>
                                </div>
                            </div>
                        </div>
                        {/* <div className="service-block col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="/page-service-details"><img src="/images/resource/service-1.jpg" title='Oitech' /></Link></figure>
                                    <div className="icon-box"><i className="icon flaticon-business-002-graph" /></div>
                                </div>
                                <div className="content-box">
                                    <h5 className="title"><Link href="/page-service-details">UI/UX Designing</Link></h5>
                                    <div className="text">We’ve designed a culture that allows our stewards to assimilate</div>
                                    <Link href="/page-service-details" className="read-more">read More <i className="fa fa-long-arrow-alt-right" /></Link>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceOne;
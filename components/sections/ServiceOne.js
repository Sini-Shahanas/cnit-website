import Link from "next/link";
import React from "react";

const ServiceOne = () => {
  return (
    <>
      <section className="services-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            <span className="sub-title">Why choose us</span>
            <h2>
              Why Our Customers
              <br />
              Choose Working With Us
            </h2>
          </div>
          <div className="row">
            {/* Counter block*/}
            <div className="counter-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
              <div className="inner">
                <i className="icon flaticon-business-060-graph" />
                <h6 className="counter-title">Innovation</h6>

                {/* <div className="count-box"> */}
                {/* <CounterUp className="count-text" count={4520} time={3} /> */}
                <div className="text-choose">
                  Innovation is at our core. We continually adopt cutting-edge
                  advancements like serverless computing and microservices to
                  deliver solutions that drive your business forward.
                </div>
                {/* </div> */}
              </div>
            </div>
            {/*Counter block*/}
            <div
              className="counter-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="inner">
                <i className="icon flaticon-business-035-helpline" />
                {/* <div className="count-box"> */}
                {/* <CounterUp className="count-text" count={326} time={3} /> */}
                {/* </div> */}
                <h6 className="counter-title">Expertise</h6>
                <div className="text-choose">
                  Our team brings deep cloud technology expertise, providing
                  top-tier solutions. We leverage optimal architectures to
                  enhance your IT infrastructure.
                </div>
              </div>
            </div>
            {/*Counter block*/}
            <div
              className="counter-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay="600ms"
            >
              <div className="inner">
                <i className="icon flaticon-business-020-hierarchy" />
                {/* <div className="count-box">
                                        <CounterUp className="count-text" count={8600} time={3} />
                                    </div> */}
                <h6 className="counter-title">Tailored solutions</h6>
                <div className="text-choose">
                  We recognize that every business is unique. Our solutions are
                  crafted to align with your specific goals, helping you achieve
                  and surpass your objectives.
                </div>
              </div>
            </div>
            {/*Counter block*/}
            <div
              className="counter-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay="900ms"
            >
              <div className="inner">
                <i className="icon flaticon-business-048-coin" />
                {/* <div className="count-box">
                                        <CounterUp className="count-text" count={238} time={3} />
                                    </div> */}
                <h6 className="counter-title">Sustainability</h6>
                <div className="text-choose">
                  We are committed to a sustainable future, embedding
                  eco-friendly practices in our operations to minimize our
                  environmental footprint.className
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
          {/* <div className="row">
                        <div className="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="/page-service-details"><img src="/images/resource/service-1.jpg" title='Oitech' /></Link></figure>
                                    <div className="icon-box"><i className="icon flaticon-business-010-startup" /></div>
                                </div>
                                <div className="content-box">
                                    <h5 className="title"><Link href="/page-service-details">Product Development</Link></h5>
                                    <div className="text">We’ve designed a culture that allows our stewards to assimilate</div>
                                    <Link href="/page-service-details" className="read-more">read More <i className="fa fa-long-arrow-alt-right" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="/page-service-details"><img src="/images/resource/service-2.jpg" title='Oitech' /></Link></figure>
                                    <div className="icon-box"><i className="icon flaticon-business-002-graph" /></div>
                                </div>
                                <div className="content-box">
                                    <h5 className="title"><Link href="/page-service-details">UI/UX Designing</Link></h5>
                                    <div className="text">We’ve designed a culture that allows our stewards to assimilate</div>
                                    <Link href="/page-service-details" className="read-more">read More <i className="fa fa-long-arrow-alt-right" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="/page-service-details"><img src="/images/resource/service-3.jpg" title='Oitech' /></Link></figure>
                                    <div className="icon-box"><i className="icon flaticon-business-048-coin" /></div>
                                </div>
                                <div className="content-box">
                                    <h5 className="title"><Link href="/page-service-details">Digital Marketing</Link></h5>
                                    <div className="text">We’ve designed a culture that allows our stewards to assimilate</div>
                                    <Link href="/page-service-details" className="read-more">read More <i className="fa fa-long-arrow-alt-right" /></Link>
                                </div>
                            </div>
                        </div>
                    </div> */}
        </div>
      </section>
    </>
  );
};

export default ServiceOne;

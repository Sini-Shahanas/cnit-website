import Link from 'next/link';
import React from 'react';

const CtaTwo = () => {
    return (
        <>
            <section className="call-to-action-two p-0">
                <div className="auto-container">
                    <div className="outer-box wow fadeIn">
                        {/* Image Box */}
                        <div className="image-box">
                            <figure className="image"><img src="/images/resource/image-2.jpg" title='Oitech' /></figure>
                        </div>
                        {/* Content Box */}
                        <div className="content-box">
                            <div className="title-box">
                                <h3 className="title">We’re Ready <br />Develop Your Site!</h3>
                            </div>
                            <div className="btn-box">
                                <Link href="/page-about" className="theme-btn btn-style-two hvr-light"><span className="btn-title">More Services</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CtaTwo;
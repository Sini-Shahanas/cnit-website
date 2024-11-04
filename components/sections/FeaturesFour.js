import React from 'react';

const FeaturesFour = () => {
    return (
        <>
            <section className="features-section-four pull-down p-0">
                <div className="auto-container">
                    <div className="row g-0">
                        {/* Feature Block */}
                        <div className="feature-block-four col-lg-6 col-md-12 col-sm-12 wow fadeInLeft">
                            <div className="inner-box">
                                <div className="content" style={{ backgroundImage: 'url(images/resource/feature-bg-1.jpg)' }}>
                                    <span className="icon flaticon-business-030-settings" />
                                    <h5 className="title">End to End Development</h5>
                                    <div className="text">There are many variations of available</div>
                                </div>
                            </div>
                        </div>
                        {/* Feature Block */}
                        <div className="feature-block-four col-lg-6 col-md-12 col-sm-12 wow fadeInRight">
                            <div className="inner-box">
                                <div className="content" style={{ backgroundImage: 'url(images/resource/feature-bg-2.jpg)' }}>
                                    <span className="icon flaticon-business-035-helpline" />
                                    <h5 className="title">End to End Development</h5>
                                    <div className="text">There are many variations of available</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FeaturesFour;
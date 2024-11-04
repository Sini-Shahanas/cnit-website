import React from 'react';
import BlogSlider from '../slider/BlogSlider';

const BlogTwo = ({ alternate }) => {
    return (
        <>
            <section className="news-section-two">
                <div className="auto-container">
                    <div className="row">
                        {/* Title Column */}
                        <div className="title-column col-xl-4 col-lg-4 col-md-12">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <span className="sub-title">from the blog</span>
                                    <h2>Our L atest News &amp; Articles from the Blog</h2>
                                    <div className="text">There are many variations of passages of ipsum available, but the majority have suffered alteration in form.</div>
                                </div>
                            </div>
                        </div>
                        {/* Carousel Column */}
                        <div className="carousel-column col-xl-8 col-lg-8 col-md-12">
                            <div className="carousel-outer">
                                <BlogSlider />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogTwo;
import React from 'react';
import Testimonial3 from '../slider/Testimonial3';

const TestimonialThree = () => {
    return (
        <>
            <section className="testimonial-section-three">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <span className="sub-title">Our feedbacks</span>
                        <h2>What They’re Talking<br /> About Company</h2>
                    </div>
                    <Testimonial3 />
                </div>
            </section>
        </>
    );
};

export default TestimonialThree;
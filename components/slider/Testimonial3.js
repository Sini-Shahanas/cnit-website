import React from 'react';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const Testimonial3 = () => {

    const data = [
        {
            img: "1.webp",
        },
        {
            img: "2.webp",
        },
        {
            img: "3.webp",
        },
        {
            img: "4.webp",
        },
        {
            img: "5.webp",
        },
    ];


    return (
        <>
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                navigation={{
                    prevEl: ".swiper-button-prev-style-3",
                    nextEl: ".swiper-button-next-style-3",
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    575: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    767: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    991: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    1199: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1350: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                }}
                className="testimonial-carousel-three"
            >
                {/* {data.map((item, i) => ( */}
                    <SwiperSlide className="testimonial-block-three">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="thumb"><img src="/images/resource/test-thumb-7.jpg" title='Oitech' /></figure>
                                <span className="icon fa fa-quote-right" />
                            </div>
                            <div className="content-box">
                                <div className="info-box">
                                    <div className="rating"><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /></div>
                                    <h5 className="name">Mike Hardson</h5>
                                    <span className="designation">Designer</span>
                                </div>
                                <div className="text">We believe in four pillars of influence that drive our growth. This is ingrained in everything we do We use technology to create a better and smarter environment.</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="testimonial-block-three">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="thumb"><img src="/images/resource/test-thumb-8.jpg" title='Oitech' /></figure>
                                <span className="icon fa fa-quote-right" />
                            </div>
                            <div className="content-box">
                                <div className="info-box">
                                    <div className="rating"><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /></div>
                                    <h5 className="name">Jessica Brown</h5>
                                    <span className="designation">Designer</span>
                                </div>
                                <div className="text">We believe in four pillars of influence that drive our growth. This is ingrained in everything we do We use technology to create a better and smarter environment.</div>
                            </div>
                        </div>
                    </SwiperSlide>
                {/* ))} */}
            </Swiper>
        </>
    );
};

export default Testimonial3;


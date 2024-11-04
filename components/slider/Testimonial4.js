import React from 'react';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const Testimonial4 = () => {

    const data = [
        {
            img: "1.webp",
        },
        {
            img: "2.webp",
        },
        {
            img: "3.webp",
        }
    ];


    return (
        <>
            <Swiper
                slidesPerView={1}
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
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    1350: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                }}
                className="testimonial-carousel"
            >
                {data.map((item, i) => (
                    <SwiperSlide className="testimonial-block-four">
                        <div className="inner-box">
                            <div className="content-box">
                                <span className="icon icon-quote" />
                                <div className="rating"><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /></div>
                                <div className="text">Proin a lacus arcu. Nullam id dui eu orci maximus. Cras at auctor lectus, vel pretium tellus. Class aptent sociosqu ad litora torquent per conubia nostra.</div>
                            </div>
                            <div className="info-box">
                                <figure className="thumb"><img src="/images/resource/testi-thumb-3.jpg" title='Oitech' /></figure>
                                <h5 className="name">Jessica Brown</h5>
                                <span className="designation">Co Founder</span>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default Testimonial4;


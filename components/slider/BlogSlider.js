import React from 'react';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const BlogSlider = () => {

    const data = [
        {
            img: "news-1.jpg",
            title: "Tech Solutions",
            cat: "DESIGN / IDEAS"
        },
        {
            img: "news-2.jpg",
            title: "Smart Visions",
            cat: "Design"
        },
        {
            img: "news-3.jpg",
            title: "Platform Integration",
            cat: "Design"
        }
    ];


    return (
        <>
            <Swiper
                slidesPerView={3}
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
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1199: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1350: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
                className="news-carousel"
            >
                {data.map((item, i) => (
                    <SwiperSlide>
                        <div className="news-block">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><a href="news-details.html">
                                        <img src={`/images/resource/${item.img}`} title='Oitech' />
                                    </a></figure>
                                    <span className="date"><b>28</b> OCT</span>
                                </div>
                                <div className="content-box">
                                    <ul className="post-info">
                                        <li><i className="fa fa-user" /> by Admin</li>
                                        <li><i className="fa fa-tag" /> Technology</li>
                                    </ul>
                                    <h4 className="title"><a href="/news-details">Professional technology information &amp; solutions are just like…</a></h4>
                                </div>
                                <div className="bottom-box">
                                    <a href="news-details.html" className="read-more">Read More <i className="fa fa-long-arrow-alt-right" /></a>
                                    <div className="comments"><i className="fa fa-comments" /> 02</div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default BlogSlider;


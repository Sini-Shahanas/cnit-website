import Link from 'next/link';
import React from 'react';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const FeatureSlider3 = () => {

    const data = [
        {
            img: "feature-1.jpg",
            title: "Gaming and Enterteiment",
            cat: "DESIGN / IDEAS"
        },
        {
            img: "feature-2.jpg",
            title: "Business and Finance",
            cat: "Design"
        },
        {
            img: "feature-3.jpg",
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
                className="features-carousel"
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="feature-block-three">
                            <div className="inner-box ">
                                <figure className="image">
                                    <Link to="/page-about">
                                    <img src={`/images/resource/${item.img}`} title='Oitech' />
                                    </Link>
                                    <span className="icon">G</span>
                                </figure>
                                <h4 className="title"><Link href="/page-about">{item.title}</Link></h4>
                                <div className="text">There are many variations of passages of ipsum available, but the majority have suffered alteration in form.</div>
                            </div>
                        </div>

                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default FeatureSlider3;


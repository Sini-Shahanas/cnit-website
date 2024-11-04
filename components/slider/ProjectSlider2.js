import Link from 'next/link';
import React from 'react';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const ProjectSlider2 = () => {

    const data = [
        {
            img: "project-5.jpg",
            title: "Tech Solutions",
            cat: "DESIGN / IDEAS"
        },
        {
            img: "project-6.jpg",
            title: "Smart Visions",
            cat: "Design"
        },
        {
            img: "project-7.jpg",
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
                className="project-carousel-two"
            >
                {data.map((item, i) => (
                    <SwiperSlide className="project-block-two">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image">
                                    <Link href="/page-project-details" className="lightbox-image">
                                        <img src={`/images/resource/${item.img}`} title='Oitech' />
                                    </Link>
                                </figure>
                            </div>
                            <div className="content-box">
                                <h5 className="title"><Link href="/page-project-details">{item.title}</Link></h5>
                                <span className="cat">{item.cat}</span>
                                <Link href="/page-project-details" className="icon"><i className="fa fa-long-arrow-alt-right" /></Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default ProjectSlider2;


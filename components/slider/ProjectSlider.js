import Link from 'next/link';
import React from 'react';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const ProjectSlider = () => {

    const data = [
        {
            img: "project-1.jpg",
            title: "Tech Solutions",
            cat: "DESIGN / IDEAS"
        },
        {
            img: "project-2.jpg",
            title: "Smart Visions",
            cat: "Design"
        },
        {
            img: "project-3.jpg",
            title: "Platform Integration",
            cat: "Design"
        },
        {
            img: "project-4.jpg",
            title: "Web Development",
            cat: "Design"
        }
    ];


    return (
        <>
            <Swiper
                slidesPerView={4}
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
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1350: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                }}
                className="project-carousel"
            >
                {data.map((item, i) => (
                    <SwiperSlide className="project-block">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image">
                                    <Link href="images/resource/project-1.jpg" className="lightbox-image">
                                        <img src={`/images/resource/${item.img}`} title='Oitech' />
                                    </Link>
                                </figure>
                                <Link href="/page-project-details" className="icon"><i className="fa fa-long-arrow-alt-right" /></Link>
                            </div>
                            <div className="content-box">
                                <h4 className="title"><Link href="/page-project-details">{item.title}</Link></h4>
                                <span className="cat">{item.cat}</span>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default ProjectSlider;


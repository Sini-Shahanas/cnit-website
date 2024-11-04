import Link from 'next/link';
import React from 'react';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const ProjectSlider3 = () => {

    const data = [
        {
            img: "project-8.jpg",
            title: "Tech Solutions",
            cat: "DESIGN / IDEAS"
        },
        {
            img: "project-9.jpg",
            title: "Smart Visions",
            cat: "Design"
        },
        {
            img: "project-10.jpg",
            title: "Platform Integration",
            cat: "Design"
        },
        {
            img: "project-11.jpg",
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
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1350: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                }}
                className="project-carousel-three"
            >
                {data.map((item, i) => (
                    <SwiperSlide className="project-block-three">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image">
                                    <Link href="images/resource/project-8.jpg" className="lightbox-image">
                                        <img src={`/images/resource/${item.img}`} title='Oitech' />
                                    </Link>
                                </figure>
                                <div className="overlay-box">
                                    <Link href="/page-project-details" className="icon"><i className="fa fa-long-arrow-alt-right" /></Link>
                                    <h4 className="title"><Link href="/page-project-details">Tech Solutions</Link></h4>
                                    <span className="cat">DESIGN / IDEAS</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default ProjectSlider3;


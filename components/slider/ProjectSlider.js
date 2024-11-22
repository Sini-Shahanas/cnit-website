import Link from 'next/link';
import React from 'react';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const ProjectSlider = () => {

    const data = [
        {
            img: "serve1.jpg",
            title: "Cyber Security",
            // cat: "Information Safety",
            linkurl:"/service-cyber-x"
        },
        {
            img: "serve2.jpg",
            title: "Software Solution",
            // cat: "Design",
            linkurl:"/service-software-solutions"
        },
        {
            img: "serve3.jpg",
            title: "Internet of Things",
            // cat: "Design",
            linkurl:"/internet-of-things"
        },
        {
            img: "serve4.jpg",
            title: "IT Infrastructure Solution",
            // cat: "Design",
            linkurl:"/service-infrastructure-solution"
        },
        {
            img: "serve5.jpg",
            title: "Service & Maintenance",
            // cat: "Design",
            linkurl:"/service-details"
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
                    <SwiperSlide key={i} className="project-block">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image">
                                    <Link href="images/resource/project-1.jpg" className="lightbox-image">
                                        <img src={`/images/resource/${item.img}`} title='Oitech' />
                                    </Link>
                                </figure>
                                <Link href={item.linkurl} className="icon"><i className="fa fa-long-arrow-alt-right" /></Link>
                            </div>
                            <div className="content-box">
                                <h4 className="title"><Link href={item.linkurl}>{item.title}</Link></h4>
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


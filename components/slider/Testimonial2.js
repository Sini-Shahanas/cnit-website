import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// SwiperCore.use([Autoplay, Navigation]);
const Testimonial = () => {

    return (
        <>
            <div className="swiper-container testimonial-content">
                <Swiper
                    // modules={[Thumbs]}
                    // thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                    spaceBetween={10}
                    navigation={false}
                    className="swiper-wrapper"
                >
                    {/* <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide> */}
                    {/* Testimonial Block Two */}
                    <SwiperSlide className="testimonial-block swiper-slide">
                        <div className="row">
                            <div className="content-column col-lg-6 col-md-12">
                                <div className="icon-box">
                                    <span className="icon icon-quote" />
                                    <div className="rating"><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /></div>
                                </div>
                                <div className="text">This is due to their excellent service, competitive pricing and customer support. It’s refresing to get such a personal touch. Duis aute lorem ipsum is simply free text available in the market reprehen.</div>
                                <div className="info-box">
                                    <h4 className="name">Mike Hardson</h4>
                                    <span className="designation">Senior Designer</span>
                                </div>
                            </div>
                            <div className="image-column col-lg-6 col-md-12">
                                <figure className="image"><img src="/images/resource/testimonial-1.png" title='Oitech' /></figure>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Testimonial Block Two */}
                    <SwiperSlide className="testimonial-block swiper-slide">
                        <div className="row">
                            <div className="content-column col-lg-6 col-md-12">
                                <div className="icon-box">
                                    <span className="icon icon-quote" />
                                    <div className="rating"><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /></div>
                                </div>
                                <div className="text">competitive pricing and customer support. It’s refresing to get such a personal touch. Duis aute lorem ipsum is simply free text available in the market reprehen. This is due to their excellent service,</div>
                                <div className="info-box">
                                    <h4 className="name">Jessica Brown</h4>
                                    <span className="designation">Senior Designer</span>
                                </div>
                            </div>
                            <div className="image-column col-lg-6 col-md-12">
                                <figure className="image"><img src="/images/resource/testimonial-1.png" title='Oitech' /></figure>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Testimonial Block Two */}
                    <SwiperSlide className="testimonial-block swiper-slide">
                        <div className="row">
                            <div className="content-column col-lg-6 col-md-12">
                                <div className="icon-box">
                                    <span className="icon icon-quote" />
                                    <div className="rating"><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /></div>
                                </div>
                                <div className="text">Simply free text available in the market reprehen. This is due to their excellent service, competitive pricing and customer support. It’s refresing to get such a personal touch. Duis aute lorem ipsum is </div>
                                <div className="info-box">
                                    <h4 className="name">michale smith</h4>
                                    <span className="designation">Senior Designer</span>
                                </div>
                            </div>
                            <div className="image-column col-lg-6 col-md-12">
                                <figure className="image"><img src="/images/resource/testimonial-1.png" title='Oitech' /></figure>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Add Pagination */}
                    <div className="testimonial-pagination" />
                </Swiper>
            </div>
            {/* <div className="swiper-container testimonial-thumbs">
                <Swiper
                    modules={[Thumbs]}
                    watchSlidesProgress
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={3}
                    // freeMode={true}
                    // watchSlidesProgress={true}
                    // modules={[FreeMode, Navigation, Thumbs]}
                    className="swiper-wrapper"
                >
                    <SwiperSlide className="swiper-slide testimonial-thumb">
                        <figure className="image"><img src="/images/resource/testi-thumb-2.jpg" title='Oitech' /></figure>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide testimonial-thumb">
                        <figure className="image"><img src="/images/resource/testi-thumb-1.jpg" title='Oitech' /></figure>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide testimonial-thumb">
                        <figure className="image"><img src="/images/resource/testi-thumb-3.jpg" title='Oitech' /></figure>
                    </SwiperSlide>
                </Swiper>
            </div> */}
        </>
    );
};

export default Testimonial;


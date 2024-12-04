// import Link from 'next/link';
// import React, { useState, useEffect } from 'react';
// import ModalVideo from 'react-modal-video';
// import SwiperCore, { Autoplay, Navigation } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';

// SwiperCore.use([Autoplay, Navigation]);

// const IntroSlider1 = () => {
//   const [isOpen, setOpen] = useState(false);
//   const [banners, setBanners] = useState([]);
//   // const [isMobile, setIsMobile] =useState(false);

//   // useEffect(() =>{
//   //   const handleResize =() =>{
//   //     setIsMobile(window.innerWidth < 768)
//   //   };
//   //   handleResize();
//   //   window.addEventListener('resize', handleResize);
//   // }, []);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/home-pages?populate[homeBanner][populate]=*`);
//       const data = await response.json();
//       setBanners(data.data);
//     };

//     fetchData();
//   }, []);

//   return (
//     <>
//       <Swiper
//         slidesPerView={1}
//         spaceBetween={30}
//         loop={true}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         navigation={{
//           prevEl: '.swiper-button-prev-style-3',
//           nextEl: '.swiper-button-next-style-3',
//         }}
//         className="project-carousel"
//       >
//         {banners.map((banner, i) => (
//           banner.homeBanner && banner.homeBanner.backgroundImage &&
//           banner.homeBanner.backgroundImage.map((image, j) => (
//             <SwiperSlide key={`${i}-${j}`}>
//               <div className="slide-item">
//                 <div
//                   className="bg-image"
//                   style={{
//                     backgroundImage: `url(${process.env.NEXT_PUBLIC_API_URL.replace('/api', '')}${image.url})`,
//                     // height: isMobile ? '300px' : '500px',
//                     // backgroundSize: 'cover',
//                     // backgroundPosition: 'center', 
//                   }}
//                 />
//                 <div className="auto-container">
//                   <div className="content-box">
//                     {banner.homeBanner.title && (
//                       <span className="sub-title animate-1">{banner.homeBanner.title}</span>
//                     )}
//                     {banner.homeBanner.subtitle && (
//                       <h1 className="title animate-2">{banner.homeBanner.subtitle}</h1>
//                     )}
//                     <div className="btn-box animate-3">
//                       {banner.homeBanner.button1Text && banner.homeBanner.button1Link && (
//                         <Link href={banner.homeBanner.button1Link} className="theme-btn btn-style-one">
//                           <span className="btn-title">{banner.homeBanner.button1Text}</span>
//                         </Link>
//                       )}
//                       {banner.homeBanner.button2Text && banner.homeBanner.button2Link && (
//                         <Link href={banner.homeBanner.button2Link} className="theme-btn btn-style-one">
//                           <span className="btn-title">{banner.homeBanner.button2Text}</span>
//                         </Link>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))
//         ))}
//       </Swiper>

//       <ModalVideo
//         channel="youtube"
//         autoplay
//         isOpen={isOpen}
//         videoId="L61p2uyiMSo"
//         onClose={() => setOpen(false)}
//       />
//     </>
//   );
// };

// export default IntroSlider1;


import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import ModalVideo from 'react-modal-video';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Autoplay, Navigation]);

const IntroSlider1 = () => {
  const [isOpen, setOpen] = useState(false);
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/home-banners?populate[IntroSlider][populate]=*`);
      const data = await response.json();
      setBanners(data.data);
    };

    fetchData();
  }, []);

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: '.swiper-button-prev-style-3',
          nextEl: '.swiper-button-next-style-3',
        }}
        className="project-carousel"
      >
        {banners.map((banner, i) => (
          banner.IntroSlider && banner.IntroSlider.map((slider, j) => (
            <SwiperSlide key={`${i}-${j}`}>
              <div className="slide-item">
                <div
                  className="bg-image"
                  style={{
                    backgroundImage: `url(${process.env.NEXT_PUBLIC_API_URL.replace('/api', '')}${slider.image.url})`,
                  }}
                />
                <div className="auto-container">
                  <div className="content-box">
                    
                    {slider.title && (
                      <h6 className="title animate-2">{slider.title}</h6>
                    )}
                    {slider.subtitle && (
                      <span className="sub-title animate-1">{slider.subtitle}</span>
                    )}
                    <div className="btn-box animate-3">
                      {banner.buttonText && banner.buttonLink && (
                        <Link href={banner.buttonLink} className="theme-btn btn-style-one">
                          <span className="btn-title">{banner.buttonText}</span>
                        </Link>
                      )}
                      {slider.exploreButton && slider.exploreLink && (
                        <Link href={slider.exploreLink} className="theme-btn btn-style-one">
                          <span className="btn-title">{slider.exploreButton}</span>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))
        ))}
      </Swiper>

      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="L61p2uyiMSo"
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default IntroSlider1;

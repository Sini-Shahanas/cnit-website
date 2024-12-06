// import Link from 'next/link';
// import React, { useEffect, useState } from 'react';

// const ServiceThree = () => {
//     const [details, setDetails] = useState([]);

//     useEffect(()=>{
//         const fetchData = async () =>{
//             const response= await fetch(`${process.env.NEXT_PUBLIC_API_URL}/service-technicals?populate[Details][populate]=*`);
//             const data = await response.json();
//             setDetails(data.data);
//         } 
//         fetchData();
//     }, [])
//     return (
//         <>
//             <section className="services-section-three">
//                 <div className="auto-container">
//                     <div className="sec-title text-center">
//                         <h2>Our Technical Partners</h2>
//                     </div>
//                     <div className="outer-box">
//                         <div className="row justify-content-center">
//                             <div className="service-block-three col wow fadeInUp">
//                                 <div className="inner-box ">
//                                     <img className="icon" src="/images/resource/redhat.png" />
//                                     <h6 className="title"><Link href="/page-service-details">Red Hat</Link></h6>
//                                 </div>
//                             </div>
//                             <div className="service-block-three col wow fadeInUp" data-wow-delay="200ms">
//                                 <div className="inner-box ">
//                                     <img className="icon" src="/images/resource/fortinet.png" />
//                                     <h6 className="title"><Link href="/page-service-details">Fortinet</Link></h6>
//                                 </div>
//                             </div>
//                             <div className="service-block-three col wow fadeInUp" data-wow-delay="400ms">
//                                 <div className="inner-box ">
//                                     <img className="icon" src="/images/resource/ruijie.png" />
//                                     <h6 className="title"><Link href="/page-service-details">Ruijie</Link></h6>
//                                 </div>
//                             </div>
//                             <div className="service-block-three col wow fadeInUp" data-wow-delay="600ms">
//                                 <div className="inner-box ">
//                                     <img className="icon" src="/images/resource/h3c.png" />
//                                     <h6 className="title"><Link href="/page-service-details">H3C</Link></h6>
//                                 </div>
//                             </div>
//                             <div className="service-block-three col wow fadeInUp" data-wow-delay="800ms">
//                                 <div className="inner-box">
//                                     <img className="icon" src="/images/resource/suse.png" />
//                                     <h6 className="title"><Link href="/page-service-details">Susi One</Link></h6>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// };

// export default ServiceThree;

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const ServiceThree = () => {
    const [details, setDetails] = useState([]);
    const [sectionTitle, setSectionTitle] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/service-technicals?populate[Details][populate]=*`);
            const data = await response.json();
            
            setSectionTitle(data.data?.[0]?.title || 'Our Technical Partners');
            setDetails(data.data);
        };
        fetchData();
    }, []);

    return (
        <>
            <section className="services-section-three">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <h2>{sectionTitle}</h2>
                    </div>
                    <div className="outer-box">
                        <div className="row justify-content-center">
                            {details?.[0]?.Details?.map((partner, index) => (
                                <div 
                                    key={index} 
                                    className="service-block-three col wow fadeInUp" 
                                    data-wow-delay={`${index * 200}ms`}>
                                    <div className="inner-box">
                                        <img className="icon" src={`${process.env.NEXT_PUBLIC_API_URL.replace('/api', '')}${partner.image.url}`} />
                                        <h6 className="title">
                                            <Link href="/page-service-details">{partner.title}</Link>
                                        </h6>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceThree;

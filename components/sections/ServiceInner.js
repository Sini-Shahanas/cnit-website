import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const ServiceOne = () => {
    const [data, setData] = useState(null);

    useEffect(()=>{
        const fetchData = async () =>{
            try {
                const response=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/sliders?populate[services][populate]=*`);
                const result=await response.json();
                setData(result.data)
            }
            catch(error) {
                console.log("Error", error);
            }
        };
        fetchData();
    }, [])

    if (!data) {
        return <></>;
    }

    return (
        <>
            <section className="services-section">
                <div className="auto-container">
                    <div className="row">
                        <h2 className="service-heading">{data[0].heading}</h2>
                        <h4 className="service-heading">{data[0].shortheading}</h4>
                        
                        {data[0].services.map((service,index) =>(
                        <div className="service-block col-lg-4 col-md-6 col-sm-12" key={index}>
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link href={service.link}>
                                            <img 
                                                src={`${process.env.NEXT_PUBLIC_API_URL.replace('/api', '')}${service.image.url}`}
                                                alt={service.title}
                                            />
                                        </Link>
                                    </figure>
                                </div>
                                <div className="content-box">
                                    <h5 className="title"><Link href={service.link}>{service.title}</Link></h5>
                                    <div className="text">{service.description}</div>
                                    <Link href={service.link} className="read-more">{data[0].read_more}<i className="fa fa-long-arrow-alt-right" /></Link>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceOne;
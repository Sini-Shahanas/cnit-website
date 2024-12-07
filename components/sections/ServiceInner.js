import Link from 'next/link';
import Image from 'next/image';

const ServiceOne = ({ data }) => {
    if (!data) {
        return <></>;
    }

    return (
        <>
            <section className="services-section">
                <div className="auto-container">
                    <div className="row">
                        <h2 className="service-heading">{data.heading}</h2>
                        <h4 className="service-heading">{data.shortheading}</h4>
                        
                        {data.services.map((service,index) =>(
                        <div className="service-block col-lg-4 col-md-6 col-sm-12" key={index}>
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link href={service.link}>
                                            <Image
                                                src={`${process.env.NEXT_PUBLIC_API_URL.replace('/api', '')}${service.image.url}`}
                                                alt={service.title}
                                                width={370}
                                                height={536}
                                            />
                                        </Link>
                                    </figure>
                                </div>
                                <div className="content-box">
                                    <h5 className="title"><Link href={service.link}>{service.title}</Link></h5>
                                    <div className="text">{service.description}</div>
                                    <Link href={service.link} className="read-more">{data.read_more}<i className="fa fa-long-arrow-alt-right" /></Link>
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
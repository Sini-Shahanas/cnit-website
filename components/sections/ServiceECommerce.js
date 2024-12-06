import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Serviceone = () => {
  const [service, setService] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/service-details?populate=*`);
        const result = await response.json();
        if (result?.data?.length) {
			const serviceData = result.data.find(item => item.id === 54);
			setService(serviceData);
        }
      } catch (error) {
        console.error("Error fetching service details:", error);
      }
    };
    fetchData();
  }, []);

  if (!service) {
    return <></>;
  }

  const { title, description, subtitle1, description1, subtitle2, description2, subtitle3, description3, image, subServices
  } = service;

  return (
    <>
      <section className="services-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4">
              <div className="service-sidebar">
                <div className="sidebar-widget service-sidebar-single">
                  <div className="service-sidebar wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="1200ms">
                    <div className="service-list">
                      <ul>
                        {subServices.map((subService, index) => (
                          <li key={subService.id}>
                            <Link className={(index === 1) ? 'current': ''} href={subService.link || ''}>
                              <i className="fas fa-angle-right"></i>
                              <span>{subService.subServiceTitle}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-8 col-lg-8">
              <div className="services-details__content">
                <img
					src={`${process.env.NEXT_PUBLIC_API_URL.replace('/api', '')}${image.url}`}
                  	alt={image.title}
                />
                <h3 className="mt-4">{title}</h3>
                <p>{description}</p>

                <h4 className="mt-4">{subtitle1}</h4>
                <p>{description1}</p>

                <h4 className="mt-4">{subtitle2}</h4>
                <p>{description2}</p>

                <h4 className="mt-4">{subtitle3}</h4>
                <p>{description3}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Serviceone;

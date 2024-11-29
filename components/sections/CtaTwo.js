import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const CtaTwo = () => {
    const [ctaData, setCtaData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCtaData = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/end-banners?populate=*`);
                const data = await response.json();
                setCtaData(data.data[0]);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchCtaData();
    }, []);

    if (error) {
        return <p>Error loading data: {error}</p>;
    }

    if (!ctaData) {
        return <></>;
    }

    return (
        <section className="call-to-action-two p-0">
            <div className="auto-container">
                <div className="outer-box wow fadeIn">
                    <div className="image-box">
                        <figure className="image">
                            <img src={`${process.env.NEXT_PUBLIC_API_URL.replace('/api', '')}${ctaData.image.url}`} 
                                    alt={ctaData.title} />
                        </figure>
                    </div>
                    <div className="content-box">
                        <div className="title-box">
                            <h3 className="title">
                                {/* {ctaData.title?.split(' ').slice(0, 2).join(' ')} <br />
                                {ctaData.title?.split(' ').slice(2).join(' ')} */}
                                {ctaData.title}
                            </h3>
                        </div>

                        <div className="btn-box">
                        <Link href={ctaData.link} className="theme-btn btn-style-two hvr-light"><span className="btn-title">{ctaData.buttonText}</span></Link>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaTwo;

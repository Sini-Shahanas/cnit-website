import Link from 'next/link';
import React from 'react';

const CtaOne = ({addClass}) => {
    return (
        <>
            <section className={`call-to-action ${addClass}`} style={{ backgroundImage: 'url(./images/background/1.jpg)' }}>
                <div className="auto-container">
                    <div className="title-box">
                        <div className="icon bounce-y"><img src="/images/resource/icon-logo.png" title='Oitech' /></div>
                        <h1 className="title">IT Solutions &amp; Services <br />at your Fingertips</h1>
                        <Link href="/page-services" className="theme-btn btn-style-one"><span className="btn-title">Discover more</span></Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CtaOne;
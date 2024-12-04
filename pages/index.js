import React from 'react';
import Layout from "../components/layout/Layout";
import AboutOne from "../components/sections/AboutOne";
import BannerOne from "../components/sections/BannerOne";
import BlogOne from "../components/sections/BlogOne";
// import ClientOne from "../components/sections/ClientOne";
import CtaOne from "../components/sections/CtaOne";
import CtaTwo from "../components/sections/CtaTwo";
// import FaqOne from "../components/sections/FaqOne";
// import FunfactOne from "../components/sections/FunfactOne";
import MapOne from "../components/sections/MapOne";
// import OfferOne from "../components/sections/OfferOne";
import ProjectOne from "../components/sections/ProjectOne";
import ServiceOne from "../components/sections/ServiceOne";
// import TeamOne from "../components/sections/TeamOne";
// import TestimonialOne from "../components/sections/TestimonialOne";
// import ProjectFour from "../components/sections/ProjectFour";
import Industries from '../components/sections/Industries';
import BlogTwo from '../components/sections/BlogTwo';
import ServiceThree from "../components/sections/ServiceThree";

export default function Home() {

    return (
        <>
            <Layout HeaderStyle="one">
                <BannerOne />
                <AboutOne />
                <ProjectOne  />
                {/* <ProjectFour addClass={"style-two text-white"} /> */}
                <ServiceOne />
                {/* <OfferOne /> */}
                <Industries />
                {/* <ProjectOne /> */}
                {/* <FunfactOne /> */}
                {/* <TestimonialOne /> */}
                {/* <ClientOne /> */}
                {/* <FaqOne /> */}
                <BlogTwo />
                <CtaTwo />
                <ServiceThree />
                <MapOne />
            </Layout>
        </>
    )
}

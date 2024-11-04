import React from 'react';
import Layout from "../components/layout/Layout";
import AboutFour from "../components/sections/AboutFour";
import AboutThree from "../components/sections/AboutThree";
import BannerOne from "../components/sections/BannerOne";
import BlogOne from "../components/sections/BlogOne";
import ClientOne from "../components/sections/ClientOne";
import ContactOne from "../components/sections/ContactOne";
import CtaThree from "../components/sections/CtaThree";
import FeaturesThree from "../components/sections/FeaturesThree";
import FeaturesTwo from "../components/sections/FeaturesTwo";
import FunfactTwo from "../components/sections/FunfactTwo";
import LocationOne from "../components/sections/LocationOne";
import MapTwo from "../components/sections/MapTwo";
import OfferTwo from "../components/sections/OfferTwo";
import ProjectTwo from "../components/sections/ProjectTwo";
import ServiceTwo from "../components/sections/ServiceTwo";
import WhyChooseOne from "../components/sections/WhyChooseOne";

export default function Home2() {
    return (
        <>
            <Layout HeaderStyle="two">
                <BannerOne />
                <FeaturesTwo />
                <AboutThree />
                <ProjectTwo />
                <OfferTwo />
                <FunfactTwo addClass={"pb-0"} />
                <AboutFour />
                <ClientOne addClass={"alternate"} />
                <FeaturesThree />
                <ServiceTwo />
                <LocationOne />
                <WhyChooseOne />
                <ContactOne />
                <BlogOne />
                <CtaThree />
                <MapTwo />

            </Layout>
        </>
    )
}

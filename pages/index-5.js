import React from 'react';
import Layout from '../components/layout/Layout';
import AboutTwo from '../components/sections/AboutTwo';
import BannerFive from '../components/sections/BannerFive';
import BlogOne from '../components/sections/BlogOne';
import ClientOne from '../components/sections/ClientOne';
import ContactFour from "../components/sections/ContactFour";
import Faq from "../components/sections/Faq";
import FeaturesSix from "../components/sections/FeaturesSix";
import IndustriesTwo from "../components/sections/IndustriesTwo";
import OfferFour from "../components/sections/OfferFour";
import Pricing from "../components/sections/Pricing";
import ProjectOne from "../components/sections/ProjectOne";
import ServiceFive from "../components/sections/ServiceFive";
import TestimonialFour from '../components/sections/TestimonialFour';

const Home5 = () => {
    return (
        <>
            <Layout HeaderStyle="five">
                <BannerFive />
                <FeaturesSix />
                <AboutTwo />
                <OfferFour />
                <IndustriesTwo />
                <ProjectOne addClass={" alternate pb-0"} />
                <Pricing />
                <ServiceFive />
                <Faq />
                <TestimonialFour />
                <ContactFour />
                <BlogOne addClass={"pt-0 pb-0"}/>
                <ClientOne />

            </Layout>
        </>
    );
};

export default Home5;
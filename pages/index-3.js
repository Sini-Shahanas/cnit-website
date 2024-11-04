import Link from "next/link";
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import AboutFive from "../components/sections/AboutFive";
import BannerTwo from "../components/sections/BannerTwo";
import BlogOne from "../components/sections/BlogOne";
import ClientOne from "../components/sections/ClientOne";
import ContactTwo from "../components/sections/ContactTwo";
import CtaFour from "../components/sections/CtaFour";
import CtaOne from "../components/sections/CtaOne";
import FeaturesFour from "../components/sections/FeaturesFour";
import LocationTwo from "../components/sections/LocationTwo";
import OfferThree from "../components/sections/OfferThree";
import ProjectThree from "../components/sections/ProjectThree";
import ServiceThree from "../components/sections/ServiceThree";
import TestimonialTwo from "../components/sections/TestimonialTwo";
import VideoOne from "../components/sections/VideoOne";
import WhyChooseTwo from "../components/sections/WhyChooseTwo";

const Home3 = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <Layout HeaderStyle="three">
                <BannerTwo />
                <ClientOne addClass={"border-bottom"} />
                <ServiceThree />
                <AboutFive />
                <ProjectThree />
                <WhyChooseTwo />
                <CtaOne addClass={"alternate"} />
                <TestimonialTwo />
                <ContactTwo />
                <FeaturesFour />
                <BlogOne addClass={"alternate"} />
                <LocationTwo />
                <CtaFour />

            </Layout>
        </>
    );
};

export default Home3;
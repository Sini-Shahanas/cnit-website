import Link from "next/link";
import React, { useState } from "react";
import Layout from '../components/layout/Layout';
import AboutSix from "../components/sections/AboutSix";
import BannerFour from "../components/sections/BannerFour";
import BlogTwo from "../components/sections/BlogTwo";
import ClientOne from "../components/sections/ClientOne";
import ContactThree from "../components/sections/ContactThree";
import CtaFive from "../components/sections/CtaFive";
import CtaTwo from "../components/sections/CtaTwo";
import FeaturesFive from "../components/sections/FeaturesFive";
import Industries from "../components/sections/Industries";
import ProjectFour from "../components/sections/ProjectFour";
import ServiceFour from "../components/sections/ServiceFour";
import TeamTwo from "../components/sections/TeamTwo";
import TestimonialThree from "../components/sections/TestimonialThree";
import WhyChooseThree from "../components/sections/WhyChooseThree";
import WorkSection from "../components/sections/WorkSection";
import BlogSlider from '../components/slider/BlogSlider';
import Brand from '../components/slider/Brand';
import IntroSlider4 from '../components/slider/IntroSlider4';
import ProjectSlider from '../components/slider/ProjectSlider';
import Testimonial3 from '../components/slider/Testimonial3';

const Home4 = () => {

    return (
        <>
            <Layout HeaderStyle="four">
                <BannerFour />
                <CtaTwo />
                <ServiceFour />
                <AboutSix />
                <ProjectFour addClass={"style-two text-white"} />
                <WorkSection />
                <TestimonialThree />
                <FeaturesFive />
                <WhyChooseThree />
                <Industries />
                <TeamTwo />
                <ClientOne addClass={"alternate"} />
                <BlogTwo />
                <ContactThree />
                <CtaFive />

            </Layout>
        </>
    );
};

export default Home4;
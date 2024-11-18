import React from 'react';
import Layout from "../components/layout/Layout";
// import AboutInner from "../components/sections/AboutInner";
// import FunfactOne from "../components/sections/FunfactOne";
// import OfferOne from "../components/sections/OfferOne";
// import ServiceOne from "../components/sections/ServiceOne";
import PageTitle from "../components/sections/PageTitle";
import Careers from '../components/sections/Careers';

export default function Home() {

    return (
        <>
            <Layout HeaderStyle="one">
                <PageTitle pageName="Careers" />
                {/* <AboutInner />
                <ServiceOne />
                <OfferOne />
                <FunfactOne /> */}
                <Careers />
            </Layout>
        </>
    )
}

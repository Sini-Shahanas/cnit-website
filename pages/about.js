import React from 'react';
import Head from 'next/head';
import Layout from "../components/layout/Layout";
import AboutInner from "../components/sections/AboutInner";
// import FunfactOne from "../components/sections/FunfactOne";
import OfferOne from "../components/sections/OfferOne";
import ServiceOne from "../components/sections/ServiceOne";
import PageTitle from "../components/sections/PageTitle";

export default function Home() {

    return (
        <>
            <Head>
                <title>About</title>
            </Head>
            <Layout HeaderStyle="one">
                <PageTitle pageName="About Us" />
                <AboutInner />
                <ServiceOne />
                <OfferOne />
                {/* <FunfactOne /> */}
            </Layout>
        </>
    )
}

import React from 'react';
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import ServiceEWaste from '../components/sections/ServiceEWaste';

export default function Home() {

    return (
        <>
            <Layout HeaderStyle="one">
                <PageTitle pageName="E-Waste Management" />
                <ServiceEWaste />
            </Layout>
        </>
    )
}

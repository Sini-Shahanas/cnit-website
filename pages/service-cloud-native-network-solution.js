import React from 'react';
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import ServiceCNN from '../components/sections/ServiceCNN';

export default function Home() {

    return (
        <>
            <Layout HeaderStyle="one">
                <PageTitle pageName="Micro Infra-Cn²S" />
                <ServiceCNN />
            </Layout>
        </>
    )
}

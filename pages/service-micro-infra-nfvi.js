import React from 'react';
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import ServiceNFVi from '../components/sections/ServiceNFVi';

export default function Home() {

    return (
        <>
            <Layout HeaderStyle="one">
                <PageTitle pageName="Micro Infra - NFVi" />
                <ServiceNFVi />
            </Layout>
        </>
    )
}

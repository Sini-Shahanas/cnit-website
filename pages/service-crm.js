import React from 'react';
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import ServiceCRM from '../components/sections/ServiceCRM';

export default function Home() {

    return (
        <>
            <Layout HeaderStyle="one">
                <PageTitle pageName="CRM" />
                <ServiceCRM />
            </Layout>
        </>
    )
}

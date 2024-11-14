import React from 'react';
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import ServiceERP from '../components/sections/ServiceERP';

export default function Home() {

    return (
        <>
            <Layout HeaderStyle="one">
                <PageTitle pageName="IBS ERP" />
                <ServiceERP />
            </Layout>
        </>
    )
}

import React from 'react';
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import ServiceEDR from '../components/sections/ServiceEDR';

export default function Home() {

    return (
        <>
            <Layout HeaderStyle="one">
                <PageTitle pageName="Endpoint Detection & Response" />
                <ServiceEDR />
            </Layout>
        </>
    )
}

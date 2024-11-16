import React from 'react';
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import ServiceNDR from '../components/sections/ServiceNDR';

export default function Home() {

    return (
        <>
            <Layout HeaderStyle="one">
                <PageTitle pageName="Network Detection & Response" />
                <ServiceNDR />
            </Layout>
        </>
    )
}

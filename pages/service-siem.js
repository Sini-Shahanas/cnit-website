import React from 'react';
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import ServiceSIEM from '../components/sections/ServiceSIEM';

export default function Home() {

    return (
        <>
            <Layout HeaderStyle="one">
                <PageTitle pageName="Security Information & Event Management" />
                <ServiceSIEM />
            </Layout>
        </>
    )
}

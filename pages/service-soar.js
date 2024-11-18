import React from 'react';
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import ServiceSOAR from '../components/sections/ServiceSOAR';

export default function Home() {

    return (
        <>
            <Layout HeaderStyle="one">
                <PageTitle pageName="Security Orchestration, Automation & Response" />
                <ServiceSOAR />
            </Layout>
        </>
    )
}

import React from 'react';
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import ServiceMonitoringTool from '../components/sections/ServiceMonitoringTool';

export default function Home() {

    return (
        <>
            <Layout HeaderStyle="one">
                <PageTitle pageName="IT Infrastructure Monitoring Tool" />
                <ServiceMonitoringTool />
            </Layout>
        </>
    )
}

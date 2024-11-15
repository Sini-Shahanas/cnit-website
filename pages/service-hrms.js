import React from 'react';
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import ServiceHRMS from '../components/sections/ServiceHRMS';

export default function Home() {

    return (
        <>
            <Layout HeaderStyle="one">
                <PageTitle pageName="HRMS" />
                <ServiceHRMS />
            </Layout>
        </>
    )
}

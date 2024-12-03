import React from 'react';
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import ServiceCNF from '../components/sections/ServiceCNF';

export default function Home() {

    return (
        <>
            <Layout HeaderStyle="one">
                <PageTitle pageName="Cloud-Native Network Functions" />
                <ServiceCNF />
            </Layout>
        </>
    )
}

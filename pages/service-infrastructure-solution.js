import React from 'react';
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import ServiceInfrastructure from '../components/sections/ServiceInfrastructure';


export default function Home() {

    return (
        <>
            <Layout HeaderStyle="one">
                <PageTitle pageName="Infrastructure Solutions" />
                <ServiceInfrastructure />
            </Layout>
        </>
    )
}

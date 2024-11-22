import React from 'react';
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import ServiceIOT from '../components/sections/ServiceIOT';

export default function Home() {

    return (
        <>
            <Layout HeaderStyle="one">
                <PageTitle pageName="Internet of Things" />
                <ServiceIOT />
            </Layout>
        </>
    )
}

import React from 'react';
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import ServiceInnovo from '../components/sections/ServiceInnovo';

export default function Home() {

    return (
        <>
            <Layout HeaderStyle="one">
                <PageTitle pageName="Innova Smart Home" />
                <ServiceInnovo />
            </Layout>
        </>
    )
}

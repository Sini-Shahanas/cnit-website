import React from 'react';
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import ServiceChip from '../components/sections/ServiceChip';

export default function Home() {

    return (
        <>
            <Layout HeaderStyle="one">
                <PageTitle pageName="Chip Level Management" />
                <ServiceChip />
            </Layout>
        </>
    )
}

import React from 'react';
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import ServiceECommerce from '../components/sections/ServiceECommerce';

export default function Home() {

    return (
        <>
            <Layout HeaderStyle="one">
                <PageTitle pageName="E-commerce" />
                <ServiceECommerce />
            </Layout>
        </>
    )
}

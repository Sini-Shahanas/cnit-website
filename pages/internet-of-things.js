import React from 'react';
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import Serviceone from '../components/sections/ServiceIOT';

export default function Home() {

    return (
        <>
            <Layout HeaderStyle="one">
                <PageTitle pageName="Internet of Things" />
                <Serviceone />
            </Layout>
        </>
    )
}

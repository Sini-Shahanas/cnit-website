import React from 'react';
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import Serviceone from '../components/sections/ServiceSoftwareSolution';

export default function Home() {

    return (
        <>
            <Layout HeaderStyle="one">
                <PageTitle pageName="Software Solutions" />
                <Serviceone />
            </Layout>
        </>
    )
}

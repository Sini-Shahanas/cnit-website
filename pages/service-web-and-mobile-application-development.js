import React from 'react';
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import Serviceone from '../components/sections/ServiceWebAndMobile';

export default function Home() {

    return (
        <>
            <Layout HeaderStyle="one">
                <PageTitle pageName="Web & Mobile Application Development" />
                <Serviceone />
            </Layout>
        </>
    )
}

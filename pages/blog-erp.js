import React from 'react';
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import BlogOne from '../components/sections/BlogERP';

export default function Home() {

    return (
        <>
            <Layout HeaderStyle="one">
                <PageTitle pageName="IBS ERP" />
                <BlogOne />
            </Layout>
        </>
    )
}

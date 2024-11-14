import React from 'react';
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import BlogOne from '../components/sections/BlogEducation';

export default function Home() {

    return (
        <>
            <Layout HeaderStyle="one">
                <PageTitle pageName="Revolutionizing Education" />
                <BlogOne />
            </Layout>
        </>
    )
}

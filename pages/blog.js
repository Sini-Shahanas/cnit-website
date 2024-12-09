import React from 'react';
import Head from 'next/head';
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import BlogInner from "../components/sections/BlogInner";

export async function getServerSideProps() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog-inners?populate=*`);
    const data = await res.json();

    return {
      props: { blogs: data.data || [] },
    };
  } catch (error) {
    console.error('Error fetching blog data:', error);
    return {
      props: { blogs: [] },
    };
  }
}

export default function Home({ blogs }) {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <Layout HeaderStyle="one">
        <PageTitle pageName="Blog" />
        <BlogInner blogs={blogs} />
      </Layout>
    </>
  );
}

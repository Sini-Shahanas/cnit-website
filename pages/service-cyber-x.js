import React from 'react';
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import ServiceCyberSecurity from '../components/sections/ServiceCyberSecurity';

export const getServerSideProps = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/service-details?populate=*`);
      const result = await response.json();

      const service = result.data?.find((item) => item.id === 50) || null;
  
      return {
        props: {
          service,
        },
      };
    } catch (error) {
      console.error('Error fetching service details:', error);
      return {
        props: {
          service: null,
        },
      };
    }
  };

export default function Home({ service }) {

    return (
        <>
            <Layout HeaderStyle="one">
                <PageTitle pageName="Cyber X" />
                <ServiceCyberSecurity service={service} />
            </Layout>
        </>
    )
}

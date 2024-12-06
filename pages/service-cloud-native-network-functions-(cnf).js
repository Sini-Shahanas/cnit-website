import React from 'react';
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import ServiceCNF from '../components/sections/ServiceCNF';

export const getServerSideProps = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/service-details?populate=*`);
      const result = await response.json();

      const service = result.data?.find((item) => item.id === 49) || null;
  
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

export default function Home({ service}) {

    return (
        <>
            <Layout HeaderStyle="one">
                <PageTitle pageName="Cloud-Native Network Functions" />
                <ServiceCNF service={service} />
            </Layout>
        </>
    )
}

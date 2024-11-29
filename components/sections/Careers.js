import Head from "next/head";
import { useState, useEffect } from "react";
import CareerModalForm from './CareerModalForm';
import Link from "next/link";

const Careers = () => {
  const [jobOpenings, setJobOpenings] = useState([]);
  
  useEffect(() => {
    const fetchJobOpenings = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/careers?populate=*`);
        const data = await response.json();
        setJobOpenings(data.data);
      } catch (error) {
        console.error("Error fetching job openings:", error);
      }
    };

    fetchJobOpenings();
  }, []);

  return (
    <>
      <Head>
        <title>Careers at Our IT Company</title>
        <meta name="description" content="Explore exciting career opportunities at our company." />
        <link rel="stylesheet" href="/css/careers.css" />
      </Head>
      <div className="container">
        <header className="header">
          <h2>Careers at Our Company</h2>
          <p>Join our innovative team and help us build cutting-edge technology!</p>
        </header>
        <section className="job-listings">
          {jobOpenings.length > 0 ? (
            jobOpenings.map((job, index) => (
              <div key={job.id} className="job-card">
                <h2>{job.heading}</h2>
                <p><strong>Location:</strong> {job.location}</p>
                <p><strong>Qualification:</strong> {job.qualification}</p>
                <p>{job.experience}</p>
                <Link href={job.buttonLink}>
                  <CareerModalcForm />                
                </Link>
              </div>
            ))
          ) : (
            <></>
          )}
        </section>
      </div>
    </>
  );
};

export default Careers;

import Head from "next/head";
import { useState, useEffect } from "react";
import CareerModalForm from './CareerModalForm';

const Careers = () => {
  const [jobOpenings, setJobOpenings] = useState([]);
  
  useEffect(() => {
    // Fetch job openings from API
    const fetchJobOpenings = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/careers?populate=*');  // Replace with your API URL
        const data = await response.json();
        setJobOpenings(data.data); // Set the job openings in the state
      } catch (error) {
        console.error("Error fetching job openings:", error);
      }
    };

    fetchJobOpenings();
  }, []);  // Empty dependency array to fetch only once when component mounts

  return (
    <>
      <Head>
        <title>Careers at Our IT Company</title>
        <meta name="description" content="Explore exciting career opportunities at our IT company." />
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
                <p><strong>Type:</strong> {job.type}</p>
                <p>{job.description}</p>
                <a href={job.buttonLink}>
                  <CareerModalForm />                
                </a>
              </div>
            ))
          ) : (
            <p>Loading job openings...</p>
          )}
        </section>
      </div>
    </>
  );
};

export default Careers;

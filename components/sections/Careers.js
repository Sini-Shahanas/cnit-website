import Head from "next/head";
import CareerModalForm from './CareerModalForm';

const Careers = ({ jobOpenings }) => {

  return (
    <>
      <Head>
        <title>Careers</title>
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
                {/* <Link href={job.buttonLink}> */}
                  <CareerModalForm job={job} />                
                {/* </Link> */}
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

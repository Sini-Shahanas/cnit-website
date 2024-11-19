import Head from "next/head";
import CareerModalForm from './CareerModalForm';

const Careers = () => {
  const jobOpenings = [
    {
      title: "Frontend Developer",
      location: "Remote",
      type: "Full-Time",
      description:
        "We are looking for a skilled Frontend Developer to build and maintain user-friendly web interfaces.",
      applyLink: "#",
    },
    {
      title: "Backend Developer",
      location: "San Francisco, CA",
      type: "Full-Time",
      description:
        "Join our team to design, develop, and maintain server-side logic and APIs.",
      applyLink: "#",
    },
  ];

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
          {jobOpenings.map((job, index) => (
            <div key={index} className="job-card">
              <h2>{job.title}</h2>
              <p><strong>Location:</strong> {job.location}</p>
              <p><strong>Type:</strong> {job.type}</p>
              <p>{job.description}</p>
              <a href={job.applyLink}>
                <CareerModalForm />                
              </a>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default Careers;

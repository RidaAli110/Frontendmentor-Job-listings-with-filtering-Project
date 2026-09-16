import { useState, useEffect } from 'react';
import Card from './Card';

export default function JobList() {
  const [jobData, setJobData] = useState([]);
  useEffect(() => {
    async function fetchJobs() {
      const res = await fetch('/data.json');
      const data = await res.json();
      setJobData(data);
    }
    fetchJobs();
  }, []);

  return (
    <section
      className='flex flex-col justify-center mt-20
     mb-8 mx-7 md:mx-20 md:mb-20 gap-5'
    >
      {jobData.map((job) => {
        return <Card key={job.id} job={job} />;
      })}
    </section>
  );
}

import { useState, useEffect } from 'react';
import Card from './Card';

export default function JobList() {
  const [jobData, setJobData] = useState([]);
  const [filters, setFilters] = useState([]);

  const handleFilter = (filter) => {
    if (filters.includes(filter)) {
      const newFilters = filters.filter((item) => {
        return item !== filter;
      });
      setFilters(newFilters);
    } else {
      setFilters([...filters, filter]);
    }

    console.log(filters);
  };

  useEffect(() => {
    async function fetchJobs() {
      const res = await fetch('/data.json');
      const data = await res.json();
      setJobData(data);
    }
    fetchJobs();
  }, []);

  const filteredJobs =
    filters.length === 0
      ? jobData
      : jobData.filter((job) => {
          const jobFilters = [
            job.role,
            job.level,
            ...job.languages,
            ...job.tools,
          ];

          return filters.every((filter) => {
            return jobFilters.includes(filter);
          });
        });

  return (
    <section
      className='flex flex-col justify-center mt-20
     mb-8 mx-7 lg:items-center lg:mx-20 lg:mb-20 gap-15 lg:gap-5'
    >
      {filteredJobs.map((job) => {
        return <Card key={job.id} job={job} handleFilter={handleFilter} />;
      })}
    </section>
  );
}

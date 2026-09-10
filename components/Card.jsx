export default function Card({ job }) {
  return (
    <div className='flex gap-6 p-6 max-w-6xl w-full border-2'>
      <img className='w-16 h-16' src={job.logo} alt='Company Logo' />
      {/* Container for company info and job details */}
      <section className='flex flex-col '>
        {/* Company info */}
        <div className='flex gap-3'>
          <h1>{job.company}</h1>
          {job.new && <p>NEW!</p>}
          {job.featured && <p>FEATURED</p>}
        </div>
        {/* Job details */}
        <div className='flex flex-col'>
          <p>{job.position}</p>
          <div className='flex flex-row'>
            <p>{job.postedAt}</p>
            <p>{job.contract}</p>
            <p>{job.location}</p>
          </div>
        </div>
      </section>
      {/* Job tags */}
      <div className='flex ml-auto gap-2'>
        <button>{job.role}</button>
        <button>{job.level}</button>
        {job.languages.map((language) => {
          return <button key={language}>{language}</button>;
        })}

        {job.tools.map((tool) => {
          return <button key={tool}>{tool}</button>;
        })}
      </div>
    </div>
  );
}

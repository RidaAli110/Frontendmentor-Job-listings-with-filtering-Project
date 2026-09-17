import JobTags from './JobTags';

export default function Card({ job }) {
  return (
    <div
      className={` flex flex-col lg:flex-row  relative  gap-6 p-6 pt-10 lg:pt-6
        max-w-6xl w-full bg-gray-50 shadow-[0_2px_6px_rgba(0,0,0,0.08)] rounded-sm
     ${job.featured ? 'border-l-4 border-l-(--blue-text)' : ''}`}
    >
      <img
        className='w-16 h-16 absolute -top-8
        left-6 lg:static lg:top-auto lg:left-auto'
        src={job.logo}
        alt='Company Logo'
      />
      {/* Container for company info and job details */}
      <section className='flex flex-col  gap-3  '>
        {/* Company info */}
        <div className='flex flex-wrap gap-4'>
          <h1
            className='  text-(--blue-text) font-bold text-sm mb-1
          hover:text-(--blue-text)'
          >
            {job.company}
          </h1>
          {job.new && (
            <p
              className=' flex justify-center items-center text-white 
              font-bold bg-(--blue-text) text-[12px]
              rounded-l-full rounded-r-full px-2 py-0.5 '
            >
              NEW!
            </p>
          )}
          {job.featured && (
            <p
              className=' flex justify-center items-center
           text-white font-bold bg-black text-[12px]
           rounded-l-full rounded-r-full px-2 py-0.5'
            >
              FEATURED
            </p>
          )}
        </div>
        {/* Job details */}
        <div className='flex flex-col font-bold gap-3'>
          <p className='hover:text-(--blue-text) cursor-pointer'>{job.position}</p>
          <div
            className='flex flex-wrap flex-row gap-3 text-sm font-light text-(--grey-text)
           '
          >
            <p className='whitespace-nowrap'>{job.postedAt}</p>
            <span>•</span>
            <p className='whitespace-nowrap'>{job.contract}</p>
            <span>•</span>
            <p className='whitespace-nowrap'>{job.location}</p>
          </div>
        </div>
      </section>
      {/* Job tags */}
      <JobTags job={job} />
    </div>
  );
}

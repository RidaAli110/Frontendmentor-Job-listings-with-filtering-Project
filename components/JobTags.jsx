import JobTagsButton from './JobTagsButton';

export default function JobTags({ job }) {
  return (
    <div
      className='flex flex-wrap items-center lg:ml-auto gap-2 
  border-t border-t-gray-300 pt-4 lg:border-t-0 lg:pt-0'
    >
      <JobTagsButton>{job.role}</JobTagsButton>
      <JobTagsButton>{job.level}</JobTagsButton>
      {job.languages.map((language) => {
        return <JobTagsButton key={language}>{language}</JobTagsButton>;
      })}

      {job.tools.map((tool) => {
        return <JobTagsButton key={tool}>{tool}</JobTagsButton>;
      })}
    </div>
  );
}

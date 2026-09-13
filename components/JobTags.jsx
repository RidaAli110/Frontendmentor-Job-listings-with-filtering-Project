

export default function JobTags({job}) {
  return (
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
  );
}

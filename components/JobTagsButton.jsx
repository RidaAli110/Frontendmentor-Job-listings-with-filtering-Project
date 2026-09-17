export default function JobTagsButton({ children }) {
  return (
    <button
      className='text-(--blue-text) text-sm font-semibold
     bg-(--job-tag-bg) px-2 py-0.5 rounded
      hover:bg-(--blue-text) hover:text-white cursor-pointer '
    >
      {children}
    </button>
  );
}

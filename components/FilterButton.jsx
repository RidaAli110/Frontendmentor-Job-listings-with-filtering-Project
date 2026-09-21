export default function FilterButton({ children, removeFilter }) {
  return (
    <div
      className='flex items-center  gap-2 text-(--blue-text) text-sm font-semibold
     bg-(--job-tag-bg) pl-2  rounded cursor-pointer'
    >
      <p className='py-0.5'>{children}</p>
      <button
        onClick={() => {
          removeFilter(children);
        }}
        className=' self-stretch hover:bg-black bg-(--blue-text) p-1
      rounded-r '
      >
        <img
          src='/images/icon-remove.svg'
          aria-label={`Remove ${children} filter`}
          alt=''
        />
      </button>
    </div>
  );
}
